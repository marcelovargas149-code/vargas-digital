import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Code, Smartphone, TrendingUp, MessageCircle, Zap, Globe, Lock, Clock, Compass } from "lucide-react";
import { useState } from "react";

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
        <div className="container flex items-center justify-between h-20"> {/* Aumentado h-16 a h-20 */}
          <div className="flex items-center gap-3"> {/* Aumentado gap-2 a gap-3 */}
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"> {/* Aumentado w-8 a w-10 */}
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">VARGAS DIGITAL</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10"> {/* Aumentado gap-8 a gap-10 para separar el menú */}
            <a href="#servicios" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#quienes-somos" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              Quiénes Somos
            </a>
            <a href="#testimonios" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </div>

          <a
            href={getWhatsAppUrl(PRESUPUESTO_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663307355148/9dMMKF68hiFNjAdePW45JV/hero-background-improved-Z8pRKuKs9PqjjNHHtxqPbu.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-white/30" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-8 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">🚀 Impulsamos tu Negocio en Internet</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tighter">
              Diseño Web Profesional para Empresas y Emprendedores
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Tener presencia online ya no es una opción, es una necesidad. En VARGAS DIGITAL creamos páginas web modernas, rápidas y optimizadas para ayudarte a conseguir más clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href={getWhatsAppUrl(PRESUPUESTO_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary hover:bg-blue-700 text-white text-lg font-bold px-8 py-4 rounded-xl transition-all shadow-xl hover:scale-105"
              >
                ¡QUIERO MI PÁGINA WEB!
              </a>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-blue-50 px-8 py-4 text-lg font-bold rounded-xl">
                Conocer Más
              </Button>
            </div>
            <div className="mt-16 flex flex-wrap gap-8 text-sm">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-bold text-slate-800">Diseño Profesional</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-bold text-slate-800">Compatible Celulares y PC</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-bold text-slate-800">Optimización para Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Nuestro Equipo</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Profesionales apasionados por crear soluciones digitales que generan resultados
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-30 h-30 rounded-2xl overflow-hidden mb-8 shadow-2xl border-4 border-white"> {/* Reducido w-48 a w-40 */}
                <img
                  src="/images/marcelo-vargas.png"
                  alt="Fundador - VARGAS DIGITAL"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Marcelo Vargas</h3>
              <p className="text-primary font-bold text-lg mb-4">Fundador & Desarrollador Web</p>
              <p className="text-slate-600 text-base leading-relaxed">
                Con más de 10 años de experiencia en desarrollo web, especializado en crear soluciones digitales que transforman negocios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-slate-900 mb-3">📲 Solicita tu presupuesto</h3>
            <p className="text-lg text-slate-600">Contacta con nosotros sin compromiso y obtén una propuesta personalizada</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center md:text-right">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp:</p>
              <p className="text-3xl font-black text-primary">11 5934-7710</p>
            </div>
            <a
              href={getWhatsAppUrl(PRESUPUESTO_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-green-600 text-white text-lg font-bold px-10 py-5 rounded-2xl transition-all shadow-lg hover:shadow-green-200/50 flex items-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Enviar Mensaje
            </a>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="quienes-somos" className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">¿Quiénes Somos?</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Somos una agencia especializada en desarrollo web y soluciones digitales. Nuestro objetivo es ayudar a empresas, comercios y emprendedores a destacar en Internet mediante sitios web modernos, funcionales y orientados a resultados.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed">
              Con atención personalizada y compromiso en cada proyecto, trabajamos para que tu negocio tenga una presencia digital profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: "Profesionalismo", description: "Diseños modernos que transmiten confianza" },
              { icon: Zap, title: "Rapidez", description: "Desarrollo eficiente y tiempos acordados" },
              { icon: MessageCircle, title: "Atención Personalizada", description: "Contacto directo durante todo el proyecto" },
              { icon: TrendingUp, title: "Tecnología Actual", description: "Herramientas modernas para garantizar calidad" },
            ].map((item, idx) => (
              <Card key={idx} className="p-8 border-none bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-3xl">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 md:py-32 bg-slate-900 text-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Nuestros Servicios</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ofrecemos soluciones digitales completas adaptadas a las necesidades de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "🌐 Páginas Web Corporativas",
                description: "Sitios profesionales para empresas, comercios y profesionales independientes.",
                features: ["Diseño personalizado", "Información de servicios", "Formulario de contacto", "WhatsApp integrado", "Optimización SEO"],
              },
              {
                title: "🚀 Landing Pages",
                description: "Páginas diseñadas para captar clientes y aumentar conversiones.",
                features: ["Diseño enfocado en ventas", "Formularios de consulta", "Botones de acción estratégicos", "Integración con campañas publicitarias"],
              },
              {
                title: "🛒 Tiendas Online",
                description: "Vendé tus productos las 24 horas.",
                features: ["Catálogo de productos", "Carrito de compras", "Medios de pago", "Gestión de stock"],
              },
              {
                title: "🔧 Mantenimiento Web",
                description: "Mantén tu sitio actualizado y protegido.",
                features: ["Actualizaciones", "Seguridad", "Copias de respaldo", "Soporte técnico"],
              },
            ].map((service, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-primary transition-all group">
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-lg mb-8">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-slate-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-24 md:py-40 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-20 text-center">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { text: '"Excelente atención y diseño profesional. Nuestra empresa mejoró notablemente su presencia online."', author: "Cliente Empresarial" },
              { text: '"Rápidos, responsables y muy atentos durante todo el proceso."', author: "Emprendedor" },
              { text: '"La página quedó exactamente como la imaginábamos."', author: "Comercio Local" },
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-10 border-none bg-slate-50 rounded-3xl relative">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-yellow-400 text-xl">⭐</span>)}
                </div>
                <p className="text-slate-700 text-lg mb-8 italic leading-relaxed">{testimonial.text}</p>
                <p className="font-bold text-primary text-lg">— {testimonial.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="contacto" className="py-24 md:py-40 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">¡Llevá tu negocio al siguiente nivel!</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Tu sitio web profesional comienza hoy. Contacta con nosotros sin compromiso.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a
              href={getWhatsAppUrl(CONTACTO_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-blue-50 text-xl font-bold px-12 py-6 rounded-2xl transition-all shadow-2xl hover:scale-105"
            >
              Solicitar Presupuesto
            </a>
            <div className="text-center md:text-left">
              <p className="text-blue-200 font-bold uppercase tracking-widest text-sm mb-1">WhatsApp:</p>
              <p className="text-4xl font-black">📲 11 5934-7710</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="font-bold text-xl">V</span>
                </div>
                <span className="font-bold text-2xl tracking-tighter">VARGAS DIGITAL</span>
              </div>
              <p className="text-slate-400 text-lg">Diseñamos páginas web que generan resultados reales para tu negocio. 🚀</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Contacto</h4>
              <p className="text-slate-400 mb-3">📱 WhatsApp: 11 5934-7710</p>
              <p className="text-slate-400">📧 Consultas sin cargo</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Servicios</h4>
              <ul className="text-slate-400 space-y-3">
                <li>Páginas Web Corporativas</li>
                <li>Landing Pages</li>
                <li>Tiendas Online</li>
                <li>Mantenimiento Web</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-10 text-center text-slate-500 font-medium">
            <p>© 2026 VARGAS DIGITAL. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
