import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Three.js 3D Cinematic Christmas Hero Experience
 * Features:
 * - 3D Flying Santa Claus with Sleigh & Reindeer flying through starry night sky
 * - 3D Decorated Christmas Tree with glowing ornaments and spinning golden star
 * - 3D Floating Gift Boxes tumbling gently in 3D space
 * - Stardust trail and interactive mouse parallax
 */
export default function ChristmasHero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x1f0305, 0.015);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.5, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // ==========================================
    // LIGHTING SYSTEM
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0xffeedd, 0.8);
    scene.add(ambientLight);

    const moonLight = new THREE.DirectionalLight(0xd4e4ff, 1.8);
    moonLight.position.set(10, 20, 15);
    scene.add(moonLight);

    // Warm fireplace glow from bottom right
    const warmGlow = new THREE.PointLight(0xff9944, 2.5, 15);
    warmGlow.position.set(3, -1, 3);
    scene.add(warmGlow);

    // Golden Christmas tree star light
    const starLight = new THREE.PointLight(0xffdf66, 3, 10);
    starLight.position.set(3.2, 3.2, 0);
    scene.add(starLight);

    // ==========================================
    // 1. 3D DECORATED CHRISTMAS TREE (Right Side)
    // ==========================================
    const treeGroup = new THREE.Group();
    treeGroup.position.set(3.2, -1.8, 0);

    // Pine foliage layers
    const foliageMat = new THREE.MeshStandardMaterial({
      color: 0x0f4024,
      roughness: 0.65,
      metalness: 0.1,
      flatShading: true,
    });
    const snowTipMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.8,
    });

    const tierHeights = [1.6, 1.4, 1.2, 1.0, 0.8];
    const tierRadii = [1.8, 1.5, 1.2, 0.9, 0.6];

    let currentY = 0;
    for (let i = 0; i < 5; i++) {
      const coneGeo = new THREE.ConeGeometry(tierRadii[i], tierHeights[i], 9);
      const cone = new THREE.Mesh(coneGeo, foliageMat);
      cone.position.y = currentY;
      treeGroup.add(cone);

      // Snow skirt on cone rim
      const snowRingGeo = new THREE.TorusGeometry(tierRadii[i] * 0.92, 0.05, 6, 12);
      snowRingGeo.rotateX(Math.PI / 2);
      const snowRing = new THREE.Mesh(snowRingGeo, snowTipMat);
      snowRing.position.y = currentY - tierHeights[i] * 0.45;
      treeGroup.add(snowRing);

      currentY += tierHeights[i] * 0.62;
    }

    // Trunk
    const trunkGeo = new THREE.CylinderGeometry(0.3, 0.35, 1.0, 8);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3d2011, roughness: 0.9 });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = -0.7;
    treeGroup.add(trunk);

    // Glowing Baubles / Ornaments on Tree
    const ornamentColors = [0xd4af37, 0xc4120c, 0xffd700, 0x10b981, 0xffffff, 0xe11d48];
    const ornamentMeshes = [];
    for (let i = 0; i < 35; i++) {
      const radius = 0.08 + Math.random() * 0.04;
      const sphereGeo = new THREE.SphereGeometry(radius, 12, 12);
      const mat = new THREE.MeshStandardMaterial({
        color: ornamentColors[i % ornamentColors.length],
        metalness: 0.85,
        roughness: 0.15,
        emissive: ornamentColors[i % ornamentColors.length],
        emissiveIntensity: 0.35,
      });
      const orb = new THREE.Mesh(sphereGeo, mat);

      const heightRatio = Math.random() * 3.2 + 0.2;
      const layerRadius = (3.5 - heightRatio) * 0.45;
      const angle = Math.random() * Math.PI * 2;
      orb.position.set(
        Math.cos(angle) * layerRadius,
        heightRatio,
        Math.sin(angle) * layerRadius
      );
      treeGroup.add(orb);
      ornamentMeshes.push(orb);
    }

    // Golden Top Star
    const starGeo = new THREE.OctahedronGeometry(0.32, 0);
    const starMat = new THREE.MeshStandardMaterial({
      color: 0xffdf55,
      emissive: 0xffaa00,
      emissiveIntensity: 0.9,
      metalness: 0.9,
      roughness: 0.1,
    });
    const starMesh = new THREE.Mesh(starGeo, starMat);
    starMesh.position.y = currentY + 0.15;
    treeGroup.add(starMesh);

    scene.add(treeGroup);

    // ==========================================
    // 2. 3D FLYING SANTA SLEIGH & REINDEER
    // ==========================================
    const santaFlightGroup = new THREE.Group();

    // Sleigh Body
    const sleighGroup = new THREE.Group();
    const sleighBodyGeo = new THREE.BoxGeometry(1.3, 0.55, 0.75);
    const sleighMat = new THREE.MeshStandardMaterial({
      color: 0xb91c1c,
      metalness: 0.4,
      roughness: 0.3,
    });
    const sleighBody = new THREE.Mesh(sleighBodyGeo, sleighMat);
    sleighGroup.add(sleighBody);

    // Sleigh Gold Runners / Skis
    const runnerGeo = new THREE.TorusGeometry(0.85, 0.04, 6, 16, Math.PI);
    const runnerMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.9, roughness: 0.1 });
    const runnerL = new THREE.Mesh(runnerGeo, runnerMat);
    runnerL.position.set(0, -0.32, 0.36);
    runnerL.rotation.z = Math.PI;
    sleighGroup.add(runnerL);

    const runnerR = new THREE.Mesh(runnerGeo, runnerMat);
    runnerR.position.set(0, -0.32, -0.36);
    runnerR.rotation.z = Math.PI;
    sleighGroup.add(runnerR);

    // Santa Figure
    const santaBodyGeo = new THREE.SphereGeometry(0.28, 12, 12);
    const santaBody = new THREE.Mesh(santaBodyGeo, sleighMat);
    santaBody.position.set(-0.15, 0.35, 0);
    sleighGroup.add(santaBody);

    const santaHeadGeo = new THREE.SphereGeometry(0.18, 12, 12);
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xffdfba, roughness: 0.7 });
    const santaHead = new THREE.Mesh(santaHeadGeo, skinMat);
    santaHead.position.set(-0.12, 0.65, 0);
    sleighGroup.add(santaHead);

    // Santa Hat
    const hatGeo = new THREE.ConeGeometry(0.18, 0.35, 8);
    const hat = new THREE.Mesh(hatGeo, sleighMat);
    hat.position.set(-0.16, 0.88, 0);
    hat.rotation.z = -0.3;
    sleighGroup.add(hat);

    // White Beard
    const beardGeo = new THREE.SphereGeometry(0.14, 8, 8);
    const beard = new THREE.Mesh(beardGeo, snowTipMat);
    beard.position.set(0.04, 0.58, 0);
    sleighGroup.add(beard);

    // Big Gift Sack in Back of Sleigh
    const sackGeo = new THREE.SphereGeometry(0.42, 12, 12);
    sackGeo.scale(1, 1.25, 1);
    const sackMat = new THREE.MeshStandardMaterial({ color: 0x854d0e, roughness: 0.9 });
    const sack = new THREE.Mesh(sackGeo, sackMat);
    sack.position.set(-0.48, 0.42, 0);
    sleighGroup.add(sack);

    santaFlightGroup.add(sleighGroup);

    // Lead Reindeer with Glowing Red Nose (Rudolph)
    const reindeerGroup = new THREE.Group();
    reindeerGroup.position.set(1.9, 0.1, 0);

    const deerBodyGeo = new THREE.BoxGeometry(0.7, 0.4, 0.35);
    const deerMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.7 });
    const deerBody = new THREE.Mesh(deerBodyGeo, deerMat);
    reindeerGroup.add(deerBody);

    const deerHeadGeo = new THREE.ConeGeometry(0.2, 0.4, 6);
    deerHeadGeo.rotateZ(-Math.PI / 3);
    const deerHead = new THREE.Mesh(deerHeadGeo, deerMat);
    deerHead.position.set(0.45, 0.28, 0);
    reindeerGroup.add(deerHead);

    // Glowing Red Nose
    const noseGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const noseMat = new THREE.MeshBasicMaterial({ color: 0xff0022 });
    const nose = new THREE.Mesh(noseGeo, noseMat);
    nose.position.set(0.65, 0.34, 0);
    reindeerGroup.add(nose);

    // Antlers
    const antlerGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.35, 5);
    antlerGeo.rotateZ(Math.PI / 4);
    const antlerL = new THREE.Mesh(antlerGeo, runnerMat);
    antlerL.position.set(0.35, 0.52, 0.12);
    reindeerGroup.add(antlerL);
    const antlerR = new THREE.Mesh(antlerGeo, runnerMat);
    antlerR.position.set(0.35, 0.52, -0.12);
    reindeerGroup.add(antlerR);

    // Golden Reins
    const reinGeo = new THREE.CylinderGeometry(0.015, 0.015, 1.8, 4);
    reinGeo.rotateZ(Math.PI / 2);
    const rein = new THREE.Mesh(reinGeo, runnerMat);
    rein.position.set(0.9, 0.15, 0);
    santaFlightGroup.add(rein);

    santaFlightGroup.add(reindeerGroup);

    // Stardust Sparkles Trail behind Sleigh
    const trailCount = 65;
    const trailGeo = new THREE.BufferGeometry();
    const trailPositions = new Float32Array(trailCount * 3);
    for (let i = 0; i < trailCount; i++) {
      trailPositions[i * 3] = -i * 0.1 - Math.random() * 0.4;
      trailPositions[i * 3 + 1] = (Math.random() - 0.5) * 0.35;
      trailPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.35;
    }
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    const trailMat = new THREE.PointsMaterial({
      color: 0xffdf77,
      size: 0.1,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const trailPoints = new THREE.Points(trailGeo, trailMat);
    trailPoints.position.set(-0.8, 0, 0);
    sleighGroup.add(trailPoints);

    santaFlightGroup.scale.set(0.85, 0.85, 0.85);
    scene.add(santaFlightGroup);

    // ==========================================
    // 3. 3D FLOATING TUMBLING GIFT BOXES
    // ==========================================
    const giftBoxes = [];
    const giftConfigs = [
      { color: 0xbe123c, ribbon: 0xffd700, pos: [-3.4, 0.8, 1.2], scale: 0.65 },
      { color: 0x047857, ribbon: 0xffffff, pos: [-2.6, -1.4, 2.0], scale: 0.55 },
      { color: 0xd97706, ribbon: 0xbe123c, pos: [-4.2, -0.6, 0.5], scale: 0.75 },
      { color: 0xbe123c, ribbon: 0xffd700, pos: [2.1, -1.8, 2.8], scale: 0.5 },
    ];

    giftConfigs.forEach((cfg) => {
      const boxGrp = new THREE.Group();
      const boxMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        roughness: 0.3,
        metalness: 0.2,
      });
      const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), boxMat);
      boxGrp.add(cube);

      // Gold / Silk Ribbon
      const ribMat = new THREE.MeshStandardMaterial({
        color: cfg.ribbon,
        roughness: 0.2,
        metalness: 0.6,
      });
      const ribX = new THREE.Mesh(new THREE.BoxGeometry(1.02, 1.02, 0.18), ribMat);
      const ribZ = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.02, 1.02), ribMat);
      boxGrp.add(ribX);
      boxGrp.add(ribZ);

      // Bow on Top
      const bow = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), ribMat);
      bow.position.y = 0.55;
      boxGrp.add(bow);

      boxGrp.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      boxGrp.scale.set(cfg.scale, cfg.scale, cfg.scale);
      scene.add(boxGrp);

      giftBoxes.push({
        group: boxGrp,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        initialY: cfg.pos[1],
        floatSpeed: Math.random() * 0.02 + 0.01,
      });
    });

    // ==========================================
    // 4. 3D GLOWING STARFIELD / SNOW BACKGROUND
    // ==========================================
    const bgStarCount = 200;
    const bgStarGeo = new THREE.BufferGeometry();
    const bgStarPos = new Float32Array(bgStarCount * 3);
    for (let i = 0; i < bgStarCount; i++) {
      bgStarPos[i * 3] = (Math.random() - 0.5) * 40;
      bgStarPos[i * 3 + 1] = Math.random() * 20 - 5;
      bgStarPos[i * 3 + 2] = -15 + Math.random() * 10;
    }
    bgStarGeo.setAttribute('position', new THREE.BufferAttribute(bgStarPos, 3));
    const bgStarMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.12,
      transparent: true,
      opacity: 0.9,
    });
    const bgStars = new THREE.Points(bgStarGeo, bgStarMat);
    scene.add(bgStars);

    // ==========================================
    // MOUSE PARALLAX & ANIMATION LOOP
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    let time = 0;
    let animId;

    const animate = () => {
      time += 0.016;

      // 1. Santa Flight Path (gliding smoothly back and forth with bobbing and banking)
      const flightProgress = (time * 0.45) % (Math.PI * 2);
      santaFlightGroup.position.x = Math.sin(flightProgress) * 5.5 - 0.5;
      santaFlightGroup.position.y = 2.2 + Math.cos(time * 1.5) * 0.35 + Math.sin(flightProgress * 2) * 0.6;
      santaFlightGroup.position.z = Math.cos(flightProgress) * 2.2;
      santaFlightGroup.rotation.y = Math.cos(flightProgress) > 0 ? 0.3 : Math.PI - 0.3;
      santaFlightGroup.rotation.z = Math.sin(time * 1.5) * 0.08;

      // 2. Rotate Golden Star & Twinkle Ornaments
      starMesh.rotation.y += 0.025;
      ornamentMeshes.forEach((orb, i) => {
        orb.material.emissiveIntensity = 0.25 + Math.sin(time * 3 + i) * 0.25;
      });

      // 3. Floating Gift Boxes
      giftBoxes.forEach((gift) => {
        gift.group.rotation.x += gift.rotSpeedX;
        gift.group.rotation.y += gift.rotSpeedY;
        gift.group.position.y = gift.initialY + Math.sin(time * 2 + gift.initialY) * 0.18;
      });

      // 4. Camera Parallax
      camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.04;
      camera.position.y += (1.5 + mouseY * 0.5 - camera.position.y) * 0.04;
      camera.lookAt(0, 0.5, 0);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animId) cancelAnimationFrame(animId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"
    />
  );
}
