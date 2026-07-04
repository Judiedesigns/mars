import { Heatmap } from '@paper-design/shaders-react';

export default function ProfilePictureShader() {
  return (
    <div className="overflow-clip relative rounded-[6px] size-[88px] lg:size-[104px] hover-glow">
      <div className="w-full h-full absolute bg-cover bg-center rounded-[6px]" style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01K76RGJ661X8DGVDW2X6AY52C/01KPXJSZEKCS86873Q2ZKTB2J7.png)' }} />
      <Heatmap
        speed={0.83}
        contour={0.5}
        angle={0}
        noise={0}
        innerGlow={0.5}
        outerGlow={0}
        scale={0.75}
        frame={151881.01900040644}
        colors={['#11206A', '#1F3BA2', '#2F63E7', '#6BD7FF', '#FFE679', '#FF991E', '#FF4C00']}
        colorBack="#00000000"
        image="https://shaders.paper.design/images/logos/diamond.svg"
        className="absolute -left-[300px] -top-[250px] w-[700px] h-[600px] opacity-[0.4] mix-blend-multiply"
      />
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white/80 inset-0 rounded-[6px]" />
    </div>
  );
}
