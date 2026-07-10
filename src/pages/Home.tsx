import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Code, Smartphone, TrendingUp, MessageCircle, Zap, Globe, Lock, Clock, Compass } from "lucide-react";
import { useState } from "react";

/**
 * VARGAS DIGITAL - Página Principal
 * Diseño: Minimalismo Moderno con Énfasis en Confianza
 * Colores: Azul profesional (#0052CC) + Verde menta (#00D084)
 * Tipografía: Poppins (headings) + Inter (body)
 */

const WHATSAPP_NUMBER = "5491159347710";
const PRESUPUESTO_MESSAGE = "Hola VARGAS DIGITAL, me gustaría solicitar un presupuesto para mi página web.";
const CONTACTO_MESSAGE = "Hola VARGAS DIGITAL, me gustaría obtener más información sobre sus servicios.";

const getWhatsAppUrl = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="font-bold text-lg text-foreground">VARGAS DIGITAL</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#quienes-somos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Quiénes Somos
            </a>
            <a href="#testimonios" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </div>
          <a
            href={getWhatsAppUrl(PRESUPUESTO_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663307355148/9dMMKF68hiFNjAdePW45JV/hero-background-improved-Z8pRKuKs9PqjjNHHtxqPbu.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-white/20" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 bg-secondary px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">🚀 Impulsamos tu Negocio en Internet</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Diseño Web Profesional para Empresas y Emprendedores
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Tener presencia online ya no es una opción, es una necesidad. En VARGAS DIGITAL creamos páginas web modernas, rápidas y optimizadas para ayudarte a conseguir más clientes, fortalecer tu imagen profesional y aumentar tus ventas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl(PRESUPUESTO_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary hover:bg-blue-700 text-white text-base font-semibold px-6 py-3 rounded-md transition-colors"
              >
                ¡QUIERO MI PÁGINA WEB!
              </a>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-secondary">
                Conocer Más
              </Button>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium text-foreground">Diseño Profesional</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium text-foreground">Compatible Celulares y PC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium text-foreground">Optimización para Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profesionales apasionados por crear soluciones digitales que generan resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-lg overflow-hidden mb-6 shadow-lg border-4 border-primary">
                <img
                  src="/manus-storage/team-member-profile_773d761c.png"
                  alt="Fundador - VARGAS DIGITAL"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Marcelo Vargas</h3>
              <p className="text-primary font-semibold mb-3">Fundador & Desarrollador Web</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Con más de 10 años de experiencia en desarrollo web, especializado en crear soluciones digitales que transforman negocios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp Section */}
      <section className="py-12 bg-secondary border-y border-border">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">📲 Solicita tu presupuesto</h3>
            <p className="text-muted-foreground">Contacta con nosotros sin compromiso y obtén una propuesta personalizada</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">WhatsApp:</p>
              <p className="text-2xl font-bold text-primary">11 5934-7710</p>
            </div>
            <a
              href={getWhatsAppUrl(PRESUPUESTO_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-green-600 text-white text-base font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center"
            >
              Enviar Mensaje
            </a>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="quienes-somos" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">¿Quiénes Somos?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Somos una agencia especializada en desarrollo web y soluciones digitales. Nuestro objetivo es ayudar a empresas, comercios y emprendedores a destacar en Internet mediante sitios web modernos, funcionales y orientados a resultados.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Con atención personalizada y compromiso en cada proyecto, trabajamos para que tu negocio tenga una presencia digital profesional.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: "Profesionalismo",
                description: "Diseños modernos que transmiten confianza",
              },
              {
                icon: Zap,
                title: "Rapidez",
                description: "Desarrollo eficiente y tiempos acordados",
              },
              {
                icon: MessageCircle,
                title: "Atención Personalizada",
                description: "Contacto directo durante todo el proyecto",
              },
              {
                icon: TrendingUp,
                title: "Tecnología Actual",
                description: "Herramientas modernas para garantizar calidad",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border border-border hover:shadow-lg transition-shadow duration-300">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones digitales completas adaptadas a las necesidades de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Globe,
                title: "🌐 Páginas Web Corporativas",
                description: "Sitios profesionales para empresas, comercios y profesionales independientes.",
                features: [
                  "Diseño personalizado",
                  "Información de servicios",
                  "Formulario de contacto",
                  "WhatsApp integrado",
                  "Optimización SEO",
                ],
              },
              {
                icon: TrendingUp,
                title: "🚀 Landing Pages",
                description: "Páginas diseñadas para captar clientes y aumentar conversiones.",
                features: [
                  "Diseño enfocado en ventas",
                  "Formularios de consulta",
                  "Botones de acción estratégicos",
                  "Integración con campañas publicitarias",
                ],
              },
              {
                icon: Smartphone,
                title: "🛒 Tiendas Online",
                description: "Vendé tus productos las 24 horas.",
                features: [
                  "Catálogo de productos",
                  "Carrito de compras",
                  "Medios de pago",
                  "Gestión de stock",
                ],
              },
              {
                icon: Lock,
                title: "🔧 Mantenimiento Web",
                description: "Mantén tu sitio actualizado y protegido.",
                features: [
                  "Actualizaciones",
                  "Seguridad",
                  "Copias de respaldo",
                  "Soporte técnico",
                ],
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="p-8 border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setActiveService(idx)}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Beneficios de Tener una Página Web
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "📈 Mayor visibilidad", description: "Sé encontrado por tus clientes potenciales" },
              { icon: Compass, title: "💼 Imagen profesional", description: "Transmite confianza y credibilidad" },
              { icon: Smartphone, title: "📱 Acceso desde cualquier dispositivo", description: "Responsive y adaptable" },
              { icon: Clock, title: "🕒 Disponible las 24 horas", description: "Tu negocio nunca cierra" },
              { icon: Globe, title: "🌎 Alcance sin límites geográficos", description: "Llega a clientes en todo el mundo" },
              { icon: TrendingUp, title: "💰 Más oportunidades de venta", description: "Incrementa tus ingresos" },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <benefit.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Trabajamos */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">Cómo Trabajamos</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Nos contactás",
                description: "Nos contás tu proyecto y tus objetivos",
              },
              {
                step: "2",
                title: "Analizamos tus necesidades",
                description: "Definimos la mejor solución para tu negocio",
              },
              {
                step: "3",
                title: "Diseñamos tu sitio",
                description: "Creamos una propuesta moderna y profesional",
              },
              {
                step: "4",
                title: "Publicamos tu web",
                description: "Tu negocio queda online y listo para crecer",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section
        id="testimonios"
        className="py-20 md:py-32 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663307355148/9dMMKF68hiFNjAdePW45JV/testimonials-bg-8M42c8Lj3W6mxyyHLfwGwF.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/80" />
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">Testimonios</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stars: 5,
                text: '"Excelente atención y diseño profesional. Nuestra empresa mejoró notablemente su presencia online."',
                author: "Cliente Empresarial",
              },
              {
                stars: 5,
                text: '"Rápidos, responsables y muy atentos durante todo el proceso."',
                author: "Emprendedor",
              },
              {
                stars: 5,
                text: '"La página quedó exactamente como la imaginábamos."',
                author: "Comercio Local",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-8 border border-border bg-white">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.stars)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                </div>
                <p className="text-foreground mb-6 italic">{testimonial.text}</p>
                <p className="font-semibold text-primary">— {testimonial.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">Preguntas Frecuentes</h2>

          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                question: "¿Cuánto tarda el desarrollo?",
                answer: "Entre 5 y 15 días dependiendo del proyecto y su complejidad.",
              },
              {
                question: "¿Necesito conocimientos técnicos?",
                answer: "No. Nosotros nos encargamos de todo. Simplemente nos comunicas tus necesidades.",
              },
              {
                question: "¿La página funcionará en celulares?",
                answer: "Sí, todos nuestros diseños son Responsive y se adaptan perfectamente a cualquier dispositivo.",
              },
              {
                question: "¿Puedo actualizar contenido?",
                answer: "Sí, podemos enseñarte cómo hacerlo o brindar mantenimiento continuo.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-border pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="contacto" className="py-20 md:py-32 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¡Llevá tu negocio al siguiente nivel!</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tu sitio web profesional comienza hoy. Contacta con nosotros sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href={getWhatsAppUrl(CONTACTO_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-blue-50 text-base font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center"
            >
              Solicitar Presupuesto
            </a>
            <div className="text-center">
              <p className="text-blue-100 text-sm mb-1">WhatsApp:</p>
              <p className="text-2xl font-bold">📲 11 5934-7710</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="font-bold text-lg">V</span>
                </div>
                <span className="font-bold text-lg">VARGAS DIGITAL</span>
              </div>
              <p className="text-blue-100 text-sm">Diseño Web Profesional para Empresas y Emprendedores</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <p className="text-blue-100 text-sm mb-2">📱 WhatsApp: 11 5934-7710</p>
              <p className="text-blue-100 text-sm">📧 Consultas y presupuestos sin cargo</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="text-blue-100 text-sm space-y-2">
                <li>Páginas Web Corporativas</li>
                <li>Landing Pages</li>
                <li>Tiendas Online</li>
                <li>Mantenimiento Web</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-blue-100 text-sm">
            <p>© 2026 VARGAS DIGITAL. Diseñamos páginas web que generan resultados. 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
