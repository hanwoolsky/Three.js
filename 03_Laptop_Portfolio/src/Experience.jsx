import { useGLTF, Environment, OrbitControls, Float, ContactShadows, Html, Text } from '@react-three/drei'

export default function Experience()
{
    const computer = useGLTF('${link.gltf}') // gltf from 'https://market.pmnd.rs/'

    return <>
        <Environment preset="city" />

        <color args={ ['#241a1a']} attach="background" />
        <OrbitControls makeDefault />

        <Float rotationIntensity={0.4}>
            <rectAreaLight
                width={ 2.5 }
                height={ 1.65 }
                intensity={ 65 }
                color={ '#c769c5' }
                rotation={ [ - 0.1, Math.PI, 0 ] }
                position={ [ 0, 0.55, - 1.15 ] }
            />
            <primitive
                object={computer.scene}
                position-y={-1.2}
            >
                <Html
                    transform
                    occlude
                    wrapperClass='htmlScreen'
                    distanceFactor={1.17}
                    position={[0, 1.56, -1.4]}
                    rotation-x={-0.256}
                >
                    <iframe src="https://hanwoolsky.github.io" />
                </Html>
                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={ 0.9 }
                    position={ [ 2, 1.7, 0.7 ] }
                    rotation-y={ -1.5 }
                    maxWidth={ 2 }
                >
                    HANWOOL HUH
                </Text>
            </primitive>
        </Float>

        <ContactShadows
            position-y={-1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />
    </>
}