import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Zap,
  Shield,
  Clock,
  DollarSign,
  TrendingUp,
  Brain,
  Lock,
  BarChart3,
  ArrowRight,
  Star,
} from "lucide-react"
import Link from "next/link"
import ParticleLogo from "@/components/particle-logo"
import SocialCarousel from "@/components/social-carousel"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">VEX</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#o-que-e" className="text-gray-300 hover:text-white transition-colors">
                O que é
              </Link>
              <Link href="#beneficios" className="text-gray-300 hover:text-white transition-colors">
                Benefícios
              </Link>
              <Link href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">
                Depoimentos
              </Link>
              <Link href="#contato" className="text-gray-300 hover:text-white transition-colors">
                Contato
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="https://wa.me/5534996943029?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20IA%20VEX%20e%20gostaria%20de%20saber%20sobre%20meu%20assistente%20de%20IA...">
                <Button>Fale Conosco</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-200 border-gray-700">
              🚀 Nova Geração de Assistentes de IA
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              🎯 O Assistente Virtual de IA que{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Trabalha 24h por Você
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Atenda clientes, resolva demandas, colete dados e aumente conversões — tudo com um assistente inteligente,
              treinado para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/5534996943029?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20IA%20VEX%20e%20gostaria%20de%20saber%20sobre%20meu%20assistente%20de%20IA...">
                <Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600">
                  ✅ Quero meu Assistente de IA agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Social Media Carousel */}
            <SocialCarousel />
          </div>
        </div>
      </section>

      {/* Particle Logo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ParticleLogo />
        </div>
      </section>

      {/* O que é um Assistente de IA? Section */}
      <section id="o-que-e" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">🧠 O que é um Assistente de IA?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Imagine um funcionário que nunca dorme, nunca erra e responde com precisão em segundos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-gray-700 shadow-lg bg-gray-800">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Atendimento Automático</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Atende clientes automaticamente via WhatsApp, Instagram, site e e-mail.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-700 shadow-lg bg-gray-800">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-indigo-400" />
                </div>
                <CardTitle className="text-white">Coleta de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Coleta e organiza informações de leads e clientes em tempo real.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-700 shadow-lg bg-gray-800">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Integração Total</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Integra com sistemas como CRM, ERP, RD Station, HubSpot, etc.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-700 shadow-lg bg-gray-800">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-indigo-400" />
                </div>
                <CardTitle className="text-white">Aprendizado Contínuo</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Aprende com suas respostas e evolui com base nas interações.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-white">100% personalizável. 100% seu.</p>
          </div>
        </div>
      </section>

      {/* Benefícios Diretos Section */}
      <section id="beneficios" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">💼 Benefícios Diretos</h2>
            <p className="text-xl text-gray-300">Transforme o atendimento em uma máquina de conversão</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-gray-700 shadow-lg bg-gray-800">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Atendimento 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Atendimento instantâneo e ininterrupto, todos os dias da semana, sem pausas ou esperas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 shadow-lg bg-gray-800">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-indigo-400" />
                </div>
                <CardTitle className="text-white">Redução de Custos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Redução de até 60% em custos operacionais com automação inteligente de processos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 shadow-lg bg-gray-800">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Aumento de Conversão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Aumento comprovado na taxa de conversão e retenção de clientes com respostas imediatas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 shadow-lg bg-gray-800">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-indigo-400" />
                </div>
                <CardTitle className="text-white">IA Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  IA treinada com sua linguagem, regras e objetivos específicos do seu negócio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 shadow-lg bg-gray-800">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Segurança Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Totalmente seguro e com histórico de interações completo para análise e melhoria contínua.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 shadow-lg bg-gray-800">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-indigo-400" />
                </div>
                <CardTitle className="text-white">Experiência Comprovada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Já ajudamos +70 empresas a automatizar seu atendimento com IA de forma eficiente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">📣 Depoimentos</h2>
            <p className="text-xl text-gray-300">O que nossos clientes dizem sobre o Assistente Virtual da VEX</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-gray-700 shadow-lg bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "Nosso atendimento melhorou 10x! A IA responde com naturalidade e resolve o que antes exigia 3
                  funcionários."
                </p>
                <div>
                  <p className="font-semibold text-white">André M.</p>
                  <p className="text-sm text-gray-400">CEO da VisionX</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-700 shadow-lg bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "O assistente da VEX integrou com nosso CRM e fez o comercial voar."
                </p>
                <div>
                  <p className="font-semibold text-white">Patrícia R.</p>
                  <p className="text-sm text-gray-400">Gerente de Vendas</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            🚀 Pronto para ter seu próprio assistente de IA?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Chega de perder leads ou gastar com atendimentos manuais. A IA da VEX te coloca no controle — com
            performance, inteligência e escala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/5534996943029?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20IA%20VEX%20e%20gostaria%20de%20saber%20sobre%20meu%20assistente%20de%20IA...">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                🧠 Quero meu Assistente de IA personalizado
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">VEX</span>
              </div>
              <p className="text-gray-400 mb-4">
                Assistentes virtuais de IA que transformam seu atendimento e impulsionam seus resultados.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-gray-400 mb-2">Email: contato@iavex.pro</p>
              <p className="text-gray-400 mb-2">Telefone: (34) 9694-3029</p>
              <p className="text-gray-400">WhatsApp: (34) 9694-3029</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 VEX. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
