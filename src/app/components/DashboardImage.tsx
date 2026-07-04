import dashboardImg from '../../imports/image-2.png';

export default function DashboardImage() {
  return <img src={dashboardImg} alt="Dashboard Design" className="object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]" />;
}
