import * as THREE from 'https://cdn.skypack.dev/three@0.136';

function buildTorso() {
	let torso = new THREE.Group();
  let mesh = buildBody2(2*WW,HH,WW);
  //let mesh = new THREE.Mesh (new THREE.BoxGeometry(2*WW,HH,WW), new THREE.MeshNormalMaterial());
  torso.add (mesh);
  mesh.position.y = HH/2;

	return torso;
}
//export {buildHead2,buildBody2,buildRLeg2,buildLLeg2,buildRArm2,buildLArm2,buildHead,buildLLeg,buildRLeg,buildLArm,buildRArm,buildTorso};
export (buildTorso);