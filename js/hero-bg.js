(function () {
  "use strict";

  var canvas = document.getElementById("heroCanvas");
  if (!canvas) return;

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) return;

  var vertexSrc = [
    "attribute vec2 position;",
    "void main() {",
    "  gl_Position = vec4(position, 0.0, 1.0);",
    "}"
  ].join("\n");

  var fragmentSrc = [
    "precision highp float;",
    "uniform vec2  u_resolution;",
    "uniform float u_time;",
    "uniform float u_grain;",
    "uniform vec3  u_colors[4];",
    "uniform vec3  u_bg;",
    "",
    "vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }",
    "",
    "float snoise(vec2 v){",
    "  const vec4 C = vec4(0.211324865405187, 0.366025403784439,",
    "           -0.577350269189626, 0.024390243902439);",
    "  vec2 i  = floor(v + dot(v, C.yy) );",
    "  vec2 x0 = v -   i + dot(i, C.xx);",
    "  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);",
    "  vec4 x12 = x0.xyxy + C.xxzz;",
    "  x12.xy -= i1;",
    "  i = mod(i, 289.0);",
    "  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))",
    "  + i.x + vec3(0.0, i1.x, 1.0 ));",
    "  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),",
    "    dot(x12.zw,x12.zw)), 0.0);",
    "  m = m*m ;",
    "  m = m*m ;",
    "  vec3 x = 2.0 * fract(p * C.www) - 1.0;",
    "  vec3 h = abs(x) - 0.5;",
    "  vec3 ox = floor(x + 0.5);",
    "  vec3 a0 = x - ox;",
    "  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );",
    "  vec3 g;",
    "  g.x  = a0.x  * x0.x  + h.x  * x0.y;",
    "  g.yz = a0.yz * x12.xz + h.yz * x12.yw;",
    "  return 130.0 * dot(m, g);",
    "}",
    "",
    "void main() {",
    "  vec2 uv = gl_FragCoord.xy / u_resolution;",
    "  float ratio = u_resolution.x / u_resolution.y;",
    "  vec2 p = uv - 0.5;",
    "  p.x *= ratio;",
    "",
    "  float t = u_time * 0.1;",
    "",
    "  float n1 = snoise(p * 0.4 + vec2(t * 0.2, -t * 0.3));",
    "  float n2 = snoise(p * 0.55 + vec2(-t * 0.15, t * 0.25) + n1 * 0.25);",
    "  float n3 = snoise(p * 0.75 + vec2(t * 0.1, -t * 0.2) + n2 * 0.2);",
    "",
    "  vec3 col = u_bg;",
    "",
    "  float dist = length(p) * 1.5;",
    "  float vignette = 1.0 - smoothstep(0.3, 1.2, dist);",
    "",
    "  col = mix(col, u_colors[0], smoothstep(-0.2, 0.5, n1) * 0.85);",
    "  col = mix(col, u_colors[1], smoothstep(-0.1, 0.6, n2) * 0.7);",
    "  col = mix(col, u_colors[2], smoothstep(-0.3, 0.4, n3) * 0.6);",
    "  col = mix(col, u_colors[3], smoothstep(0.0, 0.7, n1 * n2) * 0.5);",
    "",
    "  float glow = smoothstep(0.8, 0.0, dist) * 0.3;",
    "  col += u_colors[1] * glow;",
    "",
    "  col = mix(col * 0.2, col, vignette);",
    "",
    "  float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453 + u_time);",
    "  col += (grain - 0.5) * u_grain * 0.1;",
    "",
    "  gl_FragColor = vec4(col, 1.0);",
    "}"
  ].join("\n");

  function createShader(type, src) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  var vs = createShader(gl.VERTEX_SHADER, vertexSrc);
  var fs = createShader(gl.FRAGMENT_SHADER, fragmentSrc);
  if (!vs || !fs) return;

  var program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
  gl.useProgram(program);

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

  var posLoc = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  var locs = {
    res: gl.getUniformLocation(program, "u_resolution"),
    time: gl.getUniformLocation(program, "u_time"),
    grain: gl.getUniformLocation(program, "u_grain"),
    colors: gl.getUniformLocation(program, "u_colors"),
    bg: gl.getUniformLocation(program, "u_bg")
  };

  function hexToRgb(hex) {
    var h = hex.replace("#", "");
    return [
      parseInt(h.slice(0, 2), 16) / 255,
      parseInt(h.slice(2, 4), 16) / 255,
      parseInt(h.slice(4, 6), 16) / 255
    ];
  }

  // Brand palette: Mangghala green + gold, tuned so gold reads as a sparse
  // highlight (it only appears where two noise fields overlap) rather than
  // washing out the greens.
  var BG = hexToRgb("#052B1A");
  var COLORS = ["#17D37D", "#12A260", "#0B653C", "#FCC00C"].map(hexToRgb);
  var SPEED = 1.1;
  var GRAIN = 0.22;

  var flatColors = new Float32Array(12);
  COLORS.forEach(function (c, i) {
    flatColors[i * 3] = c[0];
    flatColors[i * 3 + 1] = c[1];
    flatColors[i * 3 + 2] = c[2];
  });

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = canvas.clientWidth || canvas.parentElement.clientWidth;
    var h = canvas.clientHeight || canvas.parentElement.clientHeight;
    canvas.width = Math.max(1, Math.floor(w * dpr));
    canvas.height = Math.max(1, Math.floor(h * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  if ("ResizeObserver" in window) {
    new ResizeObserver(resize).observe(canvas);
  } else {
    window.addEventListener("resize", resize);
  }
  resize();

  var visible = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { visible = entry.isIntersecting; });
    }).observe(canvas);
  }

  function render(t) {
    requestAnimationFrame(render);
    if (!visible) return;
    gl.uniform2f(locs.res, canvas.width, canvas.height);
    gl.uniform1f(locs.time, t * 0.001 * SPEED);
    gl.uniform1f(locs.grain, GRAIN);
    gl.uniform3f(locs.bg, BG[0], BG[1], BG[2]);
    gl.uniform3fv(locs.colors, flatColors);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
  requestAnimationFrame(render);
})();
