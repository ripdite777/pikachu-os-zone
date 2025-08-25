import pikachuLogo from '@/assets/pikachu-os-logo.jpg';

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-glow delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-slide-down">
        <div className="flex justify-center mb-8">
          <img 
            src={pikachuLogo} 
            alt="Pikachu OS Logo" 
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl shadow-glow hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
          Pikachu OS
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
          Performans, Güvenlik ve Maksimum Kontrol
        </p>
        
        <div className="mt-12 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center animate-fade-in delay-500">
          <button
            onClick={() => document.getElementById('indirme')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-card"
          >
            Hemen İndir
          </button>
          <button
            onClick={() => document.getElementById('duzenleme')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
          >
            Özellikleri Keşfet
          </button>
        </div>

        {/* Stats Preview */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in delay-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">400 MB</div>
            <div className="text-white/70">RAM Kullanımı</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">45</div>
            <div className="text-white/70">Process Sayısı</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">0</div>
            <div className="text-white/70">Telemetri</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;