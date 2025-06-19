
import { useEffect } from "react";
import { Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ThankYou = () => {
  useEffect(() => {
    // Disparar evento de conversão do Meta Pixel quando a página carregar
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Purchase', {
        value: 0,
        currency: 'BRL'
      });
    }
  }, []);

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleStartWatching = () => {
    // Aqui você pode redirecionar para a área de membros ou conteúdo
    console.log("Redirecionando para o conteúdo...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Cabeçalho com ícone de sucesso */}
        <div className="space-y-4 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Obrigado pelo seu pagamento!
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Texto principal */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Sua compra foi confirmada com sucesso!
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Agora você está pronto para aproveitar todo o conteúdo que oferecemos! 
            Fique à vontade para explorar e começar sua jornada conosco.
          </p>
        </div>

        {/* Card com vídeo de streaming */}
        <Card className="p-8 max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-xl animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">AO VIVO</span>
            </div>
            
            <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <Play className="w-16 h-16 mx-auto opacity-80" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Aguardando próximo conteúdo</h3>
                    <p className="text-sm opacity-75">Bem-vindo à nossa comunidade exclusiva!</p>
                  </div>
                </div>
              </div>
              
              {/* Simulação de chat ao vivo */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 rounded-lg p-3 text-white text-sm space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="font-medium">Admin:</span>
                    <span>Bem-vindos ao nosso conteúdo exclusivo! 🎉</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600">
              🔥 Conteúdo exclusivo será liberado em breve. Mantenha-se conectado!
            </p>
          </div>
        </Card>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button 
            onClick={handleStartWatching}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" />
            Comece a assistir agora
          </Button>
          
          <Button 
            onClick={handleGoHome}
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            Voltar para a página inicial
          </Button>
        </div>

        {/* Informações adicionais */}
        <div className="mt-12 text-center space-y-2 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-sm text-gray-500">
            Você receberá um e-mail de confirmação em breve
          </p>
          <p className="text-xs text-gray-400">
            Dúvidas? Entre em contato conosco pelo suporte
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
