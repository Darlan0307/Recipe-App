import Image from 'next/image';
import iconAbove from '@/public/hat.png';
import iconBelow from '@/public/rail.png';

function Index() {
  return (
    <div className='hero-container min-h-screen relative'>
      <video src="videoback.mp4" autoPlay loop muted className="w-full h-full absolute inset-0 object-cover" />
      <div className="overlay absolute inset-0 bg-black opacity-50" />
      
      <div className="mt-[-100px] content absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center">
        <div className="mt-[250px] fire">
          <div className="text-white relative">
            <Image src={iconAbove} alt="Icon Above" width={160} height={160} className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full" />
            <h1 className="text-5xl md:text-8xl font-barlow-semi-condensed font-bold mb-4 relative z-10 Blazing" style={{ fontFamily: 'Barlow Semi Condensed, sans-serif' }}>SAVORS</h1>
            <p className="text-lg md:text-xl font-dancing-script-chefathome" style={{ fontFamily: 'Dancing Script, cursive' }}>Chef at Home</p>
            <Image src={iconBelow} alt="Icon Below" width={80} height={80} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
