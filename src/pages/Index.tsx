
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sistema de Pagamentos
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Simule uma compra para ver a página de agradecimento
        </p>
        
        <div className="space-y-4">
          <Button 
            onClick={() => navigate("/obrigado")}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Simular Compra Realizada
          </Button>
          
          <p className="text-sm text-gray-500">
            Clique para ver a página de agradecimento pós-pagamento
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
