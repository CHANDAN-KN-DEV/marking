// Three.js Interactive Enterprise Background
// Renders an elegant 3D connected mesh/node constellation representing business workflows & data networks

export function initThreeBackground() {
  const container = document.getElementById('three-canvas-container');
  if (!container || !window.THREE) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 85;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Group for rotation
  const worldGroup = new THREE.Group();
  scene.add(worldGroup);

  // 1. Create Constellation of Nodes (Business Entities, Transactions, Channels)
  const particleCount = 75;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  const bounds = { x: 70, y: 45, z: 40 };

  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * bounds.x * 2;
    const y = (Math.random() - 0.5) * bounds.y * 2;
    const z = (Math.random() - 0.5) * bounds.z * 2;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    velocities.push({
      x: (Math.random() - 0.5) * 0.04,
      y: (Math.random() - 0.5) * 0.04,
      z: (Math.random() - 0.5) * 0.03
    });
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Node Points Material
  const pointTexture = createCircleTexture();
  const pointsMaterial = new THREE.PointsMaterial({
    color: 0x3b82f6,
    size: 2.2,
    map: pointTexture,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const pointCloud = new THREE.Points(geometry, pointsMaterial);
  worldGroup.add(pointCloud);

  // 2. Dynamic Connection Lines Material
  const linesMaterial = new THREE.LineBasicMaterial({
    color: 0x2563eb,
    transparent: true,
    opacity: 0.22,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const linesGeometry = new THREE.BufferGeometry();
  const lineMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
  worldGroup.add(lineMesh);

  // 3. Subtle Floating 3D Geometric Ring (Precision Workflow Ring)
  const ringGeo = new THREE.TorusGeometry(32, 0.2, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.15,
    wireframe: true
  });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.rotation.x = Math.PI / 3;
  worldGroup.add(ringMesh);

  const ringGeo2 = new THREE.TorusGeometry(44, 0.15, 16, 120);
  const ringMat2 = new THREE.MeshBasicMaterial({
    color: 0x6366f1,
    transparent: true,
    opacity: 0.1,
    wireframe: true
  });
  const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
  ringMesh2.rotation.y = Math.PI / 4;
  ringMesh2.rotation.x = -Math.PI / 5;
  worldGroup.add(ringMesh2);

  // Mouse Parallax
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  // Handle Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation Loop
  let animationId;
  const maxDistance = 22;

  function animate() {
    animationId = requestAnimationFrame(animate);

    // Smooth camera damping
    targetX += (mouseX * 8 - targetX) * 0.03;
    targetY += (-mouseY * 6 - targetY) * 0.03;

    camera.position.x = targetX;
    camera.position.y = targetY;
    camera.lookAt(0, 0, 0);

    // Subtle continuous rotation
    worldGroup.rotation.y += 0.0009;
    worldGroup.rotation.x += 0.0003;
    ringMesh.rotation.z += 0.0012;
    ringMesh2.rotation.z -= 0.0008;

    // Update particles position & reconnect lines
    const posArr = geometry.attributes.position.array;
    const linePositions = [];

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      posArr[idx] += velocities[i].x;
      posArr[idx + 1] += velocities[i].y;
      posArr[idx + 2] += velocities[i].z;

      // Bounce at bounds
      if (Math.abs(posArr[idx]) > bounds.x) velocities[i].x *= -1;
      if (Math.abs(posArr[idx + 1]) > bounds.y) velocities[i].y *= -1;
      if (Math.abs(posArr[idx + 2]) > bounds.z) velocities[i].z *= -1;

      // Connect with nearby points
      for (let j = i + 1; j < particleCount; j++) {
        const jdx = j * 3;
        const dx = posArr[idx] - posArr[jdx];
        const dy = posArr[idx + 1] - posArr[jdx + 1];
        const dz = posArr[idx + 2] - posArr[jdx + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          linePositions.push(
            posArr[idx], posArr[idx + 1], posArr[idx + 2],
            posArr[jdx], posArr[jdx + 1], posArr[jdx + 2]
          );
        }
      }
    }

    geometry.attributes.position.needsUpdate = true;
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

    renderer.render(scene, camera);
  }

  animate();

  return () => {
    cancelAnimationFrame(animationId);
    renderer.dispose();
  };
}

// Generate circular soft glow canvas texture for particles
function createCircleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.3, 'rgba(96, 165, 250, 0.9)');
  gradient.addColorStop(0.7, 'rgba(37, 99, 235, 0.3)');
  gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(32, 32, 30, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}
