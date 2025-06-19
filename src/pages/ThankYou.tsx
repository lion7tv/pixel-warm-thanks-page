
import { useEffect } from "react";
import { Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const handleStartWatching = () => {
    window.open("https://quiz.cakto.com.br/lioni-tv-bJKUmW-PveIZr", "_blank");
  };

  const handleGoHome = () => {
    window.open("http://wa.me/5599984081880", "_blank");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Cabeçalho com ícone de sucesso */}
        <div className="space-y-4 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-4">
            <Check className="w-10 h-10 text-yellow-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Obrigado pelo seu pagamento!
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Texto principal */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Sua compra foi confirmada com sucesso!
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Agora você está pronto para aproveitar todo o conteúdo que oferecemos! 
            Fique à vontade para explorar e começar sua jornada conosco.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            onClick={handleStartWatching}
            size="lg"
            className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" />
            Comece a assistir agora
          </Button>
          
          <Button 
            onClick={handleGoHome}
            variant="outline"
            size="lg"
            className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            Voltar para a página inicial
          </Button>
        </div>

        {/* Informações adicionais */}
        <div className="mt-12 text-center space-y-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-sm text-gray-400">
            Você receberá um e-mail de confirmação em breve
          </p>
          <p className="text-xs text-gray-500">
            Dúvidas? Entre em contato conosco pelo suporte
          </p>
          <p className="text-xs text-gray-600 mt-8">
            © 2025 Lion TV. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
