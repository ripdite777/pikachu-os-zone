import { CheckCircle, Shield, Zap, Trash2, Settings, Download, Lock, Gauge } from 'lucide-react';

const EditingSection = () => {
  const features = [
    {
      icon: Trash2,
      title: 'Gereksiz Bileşenler Kaldırıldı',
      description: 'Edge, OneDrive, EdgeWebView2 ve diğer bloatware tamamen temizlendi'
    },
    {
      icon: Settings,
      title: 'Özelleştirilmiş Kurulum',
      description: 'Kurulum başlatma menüsü ve C:\\OgnitorenKs başlangıç scripti ile optimize edildi'
    },
    {
      icon: Download,
      title: 'Otomatik Kurulumlar',
      description: '7-Zip ve All in One Runtimes otomatik olarak kurulur'
    },
    {
      icon: Shield,
      title: 'Gizlilik Optimizasyonları',
      description: 'Regedit ile kapsamlı gizlilik ve hız optimizasyonları uygulandı'
    },
    {
      icon: Lock,
      title: 'Güncelleme Kontrolü',
      description: 'Windows güncellemeleri tamamen kaldırıldı, istediğinizde manuel güncelleme'
    },
    {
      icon: Gauge,
      title: 'Bellek Temizleme',
      description: 'Otomatik bellek temizleme (her 1 dakika veya 10 MB RAM kullanımında)'
    }
  ];

  const technicalDetails = [
    'İşlem sayısında %70 azalma sağlandı',
    'Gereksiz yazılımlar ve hizmetler kaldırıldı',
    'Fare ve klavye gecikmeleri optimize edildi',
    'Başlat menüsü Openshell ile değiştirildi',
    'Windows Defender varsayılan olarak devre dışı',
    'Component Manager ile tam sistem kontrolü',
    'Toolbox ve AppxRemoved ile gelişmiş yönetim',
    'Çevrimdışı hesap kurulumu için özel komutlar',
    'Sistem telemetri ve takip özellikleri devre dışı',
    'Gereksiz Windows Store uygulamaları kaldırıldı'
  ];

  return (
    <section id="duzenleme" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            🛠️ Düzenleme Hakkında
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pikachu OS, Windows 11'in gereksiz bileşenlerini kaldırarak maksimum performans ve gizlilik sunar.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105 border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Details */}
        <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Zap className="w-8 h-8 text-primary mr-3" />
            Teknik Detaylar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technicalDetails.map((detail, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero p-8 rounded-2xl shadow-glow">
            <h3 className="text-2xl font-bold text-black mb-4">
              🚀 Sonuç: %300 Daha Hızlı Sistem
            </h3>
            <p className="text-black/80 text-lg max-w-2xl mx-auto">
              Standart Windows 11'e kıyasla dramatik performans artışı, minimal kaynak kullanımı ve maksimum kullanıcı kontrolü.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditingSection;