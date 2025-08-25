import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import EditingSection from '@/components/EditingSection';
import PerformanceStats from '@/components/PerformanceStats';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Download, ExternalLink, X } from 'lucide-react';

const Index = () => {
  const comparisons = {
    windows11: [
      'RAM 2.5 GB+',
      '150+ arka plan işlemi',
      'Varsayılan Başlat Menüsü',
      'Defender açık',
      'Zorunlu güncellemeler',
      'Kısıtlı gizlilik',
      'Telemetri ve takip',
      'Bloatware dolu'
    ],
    pikachuOS: [
      'RAM 400 MB',
      '40-50 arka plan işlemi',
      'Openshell Başlat Menüsü',
      'Defender kapalı (isteğe bağlı)',
      'Güncellemeler kaldırıldı',
      'Maksimum gizlilik',
      'Telemetri devre dışı',
      'Temiz sistem'
    ]
  };

  const downloadLinks = [
    {
      title: 'Setup.exe - Manuel Kurulum',
      description: 'Mevcut sisteminiz üzerine kurulum için',
      url: '#',
      type: 'setup'
    },
    {
      title: 'Lite ISO - USB Boot',
      description: 'Temel özelliklerle hafif kurulum',
      url: '#',
      type: 'lite'
    },
    {
      title: 'Full ISO - Tüm Özellikler',
      description: 'Bütün optimizasyonlar dahil tam paket',
      url: '#',
      type: 'full'
    }
  ];

  const unsupportedFeatures = [
    'Bitlocker', 'Windows To Go', 'Windows Defender', 'Biometric Devices', 
    'Hyper-V', 'Cortana', 'Windows Hello', 'Microsoft Store (Kısıtlı)', 
    'OneDrive', 'Microsoft Edge', 'Xbox Services', 'Windows Update', 
    'Telemetry Services', 'Windows Search Indexing', 'Windows Security Center',
    'Microsoft Teams', 'Skype', 'Mail App', 'Calendar App', 'Maps App',
    'Weather App', 'News App', 'Microsoft Solitaire', 'Candy Crush Saga',
    'Mixed Reality Portal', 'Your Phone App', 'Groove Music', 'Movies & TV'
  ];

  const faqItems = [
    {
      question: 'Pikachu OS nedir?',
      answer: 'Pikachu OS, Windows 11 tabanlı özelleştirilmiş bir işletim sistemidir. Gereksiz bileşenler kaldırılarak performans ve gizlilik optimize edilmiştir.'
    },
    {
      question: 'Güncellemeler nasıl işliyor?',
      answer: 'Windows Update tamamen kaldırılmıştır. Güvenlik güncellemeleri manuel olarak yapılabilir veya gerektiğinde Component Manager kullanılabilir.'
    },
    {
      question: 'Defender kapalı, güvenlik nasıl?',
      answer: 'Defender varsayılan olarak kapalıdır ancak Component Manager ile kolayca açılabilir. Üçüncü parti antivirüs programları da kullanılabilir.'
    },
    {
      question: 'İndirme bağlantıları nerede?',
      answer: 'İndirme bölümünde Setup.exe, Lite ISO ve Full ISO seçenekleri mevcuttur. İhtiyacınıza göre uygun olanı seçebilirsiniz.'
    },
    {
      question: 'AntiCheat desteği var mı?',
      answer: 'Çoğu oyun ve AntiCheat sistemi düzgün çalışır. Ancak bazı agresif AntiCheat sistemleri modifiye sistem algıladığında sorun yaşayabilir.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Header />
      <EditingSection />
      <PerformanceStats />

      {/* Comparison Section */}
      <section id="karsilastirma" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              📊 Windows 11 vs Pikachu OS
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <X className="w-6 h-6 mr-2" />
                  Windows 11 Standart
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {comparisons.windows11.map((item, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <div className="w-6 h-6 mr-2 text-2xl">⚡</div>
                  Pikachu OS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {comparisons.pikachuOS.map((item, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              🖼️ Pikachu OS Galerisi
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105 border border-border"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-primary text-lg font-semibold">
                    Ekran Görüntüsü {index}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">
                    Pikachu OS Arayüzü
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Optimize edilmiş masaüstü görünümü
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="indirme" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              ⬇️ İndirme Bağlantıları
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloadLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300 transform hover:scale-105 border border-border">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Download className="w-6 h-6 mr-2" />
                    {link.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {link.description}
                  </p>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    İndir
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-card/50 border border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  📋 Kurulum Öncesi Uyarılar
                </h3>
                <ul className="text-muted-foreground space-y-2 text-left">
                  <li>• Kurulum öncesi önemli dosyalarınızı yedekleyin</li>
                  <li>• Internet bağlantısı olmadan kurulum yapın (çevrimdışı hesap için)</li>
                  <li>• Component Manager ile sistem ayarlarını yönetebilirsiniz</li>
                  <li>• AntiCheat gerektiren oyunlarda sorun yaşanabilir</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unsupported Features */}
      <section id="unsupported" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              ❌ Desteklenmeyenler Listesi
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </div>

          <Card className="border border-border">
            <CardHeader>
              <CardTitle className="text-destructive">
                Kaldırılan veya Devre Dışı Özellikler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {unsupportedFeatures.map((feature, index) => (
                  <Badge key={index} variant="destructive" className="justify-center">
                    {feature}
                  </Badge>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground text-center">
                Bu özellikler performans ve gizlilik optimizasyonu için kaldırılmıştır.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Changelog */}
      <section id="gunluk" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              📅 Günlük
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </div>

          <Card className="border border-border">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Günlük Yakında
                </h3>
                <p className="text-muted-foreground">
                  Sistem güncellemeleri ve yeni özellikler burada paylaşılacak.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="sss" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              ❓ SSS (Sıkça Sorulan Sorular)
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <span className="text-2xl font-bold text-primary">Pikachu OS</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Performans, Güvenlik ve Maksimum Kontrol
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Pikachu OS | Hazırlayan: Ripdite | Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;