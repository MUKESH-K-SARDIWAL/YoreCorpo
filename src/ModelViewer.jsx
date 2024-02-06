import { useGLTF } from '@react-three/drei'
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'



export default function ModelView() {

  const gift = useGLTF("v.glb");
  // const gift = useGLTF("Banking.glb");
//   const gitf = useLoader(GLTFLoader, './Personal-Credit.gltf')

  return (
    <>
      <primitive 
        object={gift.scene} 
        // position={[0, 1, 0]}
        position-y={-1}
        // position-y={-1}
        children-0-castShadow
      />
    </>
  );
}