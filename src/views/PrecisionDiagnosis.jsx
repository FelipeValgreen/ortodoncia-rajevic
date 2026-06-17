"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  BsCheckCircle, 
  BsStarFill, 
  BsTelephone, 
  BsGeoAlt, 
  BsClock, 
  BsArrowRight, 
  BsArrowCounterclockwise,
  BsShieldExclamation,
  BsHourglassSplit,
  BsChatLeftText,
  BsQuestionCircle,
  BsCashStack,
  BsChevronDown
} from "react-icons/bs";
import { FaWhatsapp, FaTooth } from "react-icons/fa";

// Import local assets
import drRajevicImg from "../assets/img_4.png";
import isotypeImg from "../assets/isotype_final.webp";
import img1 from "../assets/img_1.png";

const testimonialsData = [
  {
    text: "Me atiendo con el Dr. Rajevic desde los 14 años y hoy tengo 31. Su trabajo y dedicación siempre han sido impecables. A pesar de que soy de región, me ha acompañado durante todo mi proceso de ortodoncia y, años más tarde, en una cirugía. Es un profesional y una persona excepcional.",
    name: "Sofía Álvarez",
    tag: "Paciente de Ortodoncia y Cirugía"
  },
  {
    text: "Explicación clarísima de los pasos del tratamiento, tiempos estimativos, resultados esperados, controles y costos fijos. Muy profesional y confiable. Recomendable.",
    name: "Dobrila Sapag",
    tag: "Paciente de Ortodoncia"
  },
  {
    text: "La mejor decisión clínica. Fue tratamiento integral para mis 5 hijos, siempre claro, sin sorpresas en el presupuesto, bien explicado y con facilidades de pago.",
    name: "Alejandra Irarrazaval",
    tag: "Madre de 5 hijos"
  },
  {
    text: "Me explicó y acompañó en cada etapa de mi tratamiento de ortodoncia, el cual fue complejo por asociarse a cirugía ortognática. Genera tremenda confianza.",
    name: "Catalina Izcue",
    tag: "Paciente de Ortodoncia"
  },
  {
    text: "Mis 3 hijos se han atendido aquí. El tratamiento del doctor considera un análisis profundo de la mordida funcional, el espacio óseo y no solo alinear dientes.",
    name: "Lorena Zamora Araya",
    tag: "Madre de 3 hijos"
  },
  {
    text: "El gran profesionalismo del doctor y la empatía del equipo para estar siempre preocupados de nuestra evolución médica significó nuestra confianza familiar completa.",
    name: "Ricardo Gómez Lobos",
    tag: "Paciente de Ortodoncia"
  },
  {
    text: "Atención absolutamente personalizada según la necesidad del paciente. Excelente nivel explicativo. Mis niños van súper tranquilos a cada cita.",
    name: "Francisca Muñoz",
    tag: "Madre de pacientes"
  },
  {
    text: "Excelente atención, muy dedicado el doctor y por sobretodo amoroso. Atiende a mi hija y sus dientes y paladar cambiaron del cielo a la tierra, muy agradecidos con el doctor Zdenko.",
    name: "Carolina Muñoz",
    tag: "Mamá de paciente"
  },
  {
    text: "Excelente atención. Muy profesional y dedicado. El proceso como adulto fue súper llevadero y los resultados increíbles. 100% recomendado.",
    name: "Maria Paz Tagle",
    tag: "Paciente de Ortodoncia"
  },
  {
    text: "Seco el doctor Rajevic! Llegué por una segunda opinión y me salvó. Muy honesto y claro al explicar el tratamiento.",
    name: "Fernanda L.",
    tag: "Paciente de Ortodoncia"
  },
  {
    text: "Llegué preocupada porque me decían que mi hijo necesitaba cirugía. El Dr. Rajevic nos explicó que con ortopedia podíamos guiar su crecimiento. Hoy tiene una mordida perfecta y evitamos el pabellón. La paciencia con los niños es única.",
    name: "María José L.",
    tag: "Mamá de paciente"
  },
  {
    text: "Me hice el tratamiento Invisalign con el doctor Rajevic y fue la mejor inversión. Rápido, sin dolor y el resultado superó mis expectativas. Aparte la clínica es impecable.",
    name: "Pedro G.",
    tag: "Paciente de Invisalign"
  },
  {
    text: "Trabajo en reuniones todo el día y la verdad no quería usar brackets de metal. La ortodoncia invisible fue la solución perfecta porque nadie lo notó. Excelente nivel de doctores.",
    name: "Javier V.",
    tag: "Paciente de Ortodoncia Invisible"
  },
  {
    text: "Venía de un tratamiento fracasado de 3 años en otra clínica. El Dr Rajevic me hizo un diagnóstico crudo pero real, y en un año me arregló todo el desastre anterior. Agradecida de por vida.",
    name: "Alejandra P.",
    tag: "Paciente de Ortodoncia"
  },
  {
    text: "Dudé mucho por mi edad, pero el Dr Zdenko me explicó súper claro las opciones estéticas y empezamos el tratamiento. Ya veo los cambios y es mucho más cómodo de lo que pensé. Lo recomiendo a ojos cerrados.",
    name: "María Luz Díaz",
    tag: "Paciente de Ortodoncia"
  },
  {
    text: "Seco el doctor. Trabajo atendiendo público y los brackets de zafiro fueron la mejor decisión. Muy puntual, profesional y todo su equipo es un 7.",
    name: "Carlos Y.",
    tag: "Paciente de Ortodoncia"
  },
  {
    text: "Llegué con un dolor articular insoportable en las mañanas. El plano de relajación que me hizo el Dr. me cambió la vida. Se nota la diferencia de calidad clínica y ajuste versus otros dentistas.",
    name: "Gonzalo R.",
    tag: "Paciente de Bruxismo"
  },
  {
    text: "Excelente doctor. Muy empático para explicar el problema del bruxismo. Ya no despierto con dolores de cabeza ni cuello. Se nota la experiencia.",
    name: "Daniela S.",
    tag: "Paciente de Bruxismo"
  },
  {
    text: "Usé frenillos de niña y se me volvieron a enchuecar. No quería metales de nuevo. Con Invisalign en la clínica fue todo invisible y rapidísimo. Lo mejor fue ver la planificación en 3D antes de empezar.",
    name: "Sofía R.",
    tag: "Paciente de Invisalign"
  },
  {
    text: "Sufría de dolores cervicales y bruxismo. No buscaba estética, buscaba salud. El diagnóstico del Dr. Rajevic fue certero: mi mordida estaba causando todo. Ahora duermo sin dolor y mis dientes están alineados. Un cambio de vida.",
    name: "Carlos M.",
    tag: "Paciente de Ortodoncia y Bruxismo"
  }
];

const servicesData = [
  {
    title: "Ortodoncia Infantil y Ortopedia Maxilar",
    badge: "Niños 4 a 12 años",
    description: "Aprovechamos la ventana de crecimiento infantil para guiar el desarrollo óseo de los maxilares, resolviendo problemas de espacio y previniendo cirugías complejas en la adultez.",
    caseApplies: "Mordida cruzada, bruxismo infantil, hábitos bucales negativos o respiración bucal."
  },
  {
    title: "Ortodoncia para Adultos",
    badge: "Jóvenes y Adultos",
    description: "Alineación dental en huesos maduros utilizando fuerzas suaves y controladas para proteger raíces y encías, con una planificación coordinada para cada tipo de caso.",
    caseApplies: "Apiñamiento severo, dientes separados, problemas de mordida o preparación para implantes."
  },
  {
    title: "Invisalign (Alineadores)",
    badge: "Ortodoncia Invisible",
    description: "Alineadores transparentes de última tecnología planificados y diseñados 100% a mano por el Dr. Rajevic, asegurando un movimiento biológico seguro sin delegar la planificación a algoritmos genéricos.",
    caseApplies: "Pacientes que buscan máxima discreción, comodidad, facilidad de higiene y menor soporte óseo."
  },
  {
    title: "Ortodoncia Fija Estética",
    badge: "Estética Discreta",
    description: "Brackets de zafiro translúcidos fijos de alta eficacia que no se tiñen ni manchan con alimentos, u ortodoncia lingual instalada en la cara interna de los dientes para ser 100% invisible.",
    caseApplies: "Quienes prefieren la precisión y menor dependencia de la ortodoncia fija pero con discreción visual."
  },
  {
    title: "Bruxismo y ATM",
    badge: "Salud Mandibular",
    description: "Diagnóstico y tratamiento de la articulación temporomandibular con la confección del Plano de Relajación Míchigan rígido a medida, el estándar de oro clínico (no protectores blandos).",
    caseApplies: "Apretamiento dentario, dolor de mandíbula o cuello, desgaste de esmalte y ruidos al masticar."
  },
  {
    title: "Rehabilitación Oral",
    badge: "Ortodoncia Pre-Protésica",
    description: "Ortodoncia de soporte para verticalizar molares inclinados, redistribuir espacios o extruir raíces con el fin de crear el terreno óseo óptimo antes de colocar implantes o carillas.",
    caseApplies: "Pérdidas de piezas antiguas, colapso de mordida o necesidad de prótesis dentales complejas."
  },
  {
    title: "Segunda Opinión Clínica",
    badge: "Rescate de Casos",
    description: "Evaluación honesta y re-diagnóstico completo desde cero para tratamientos de ortodoncia estancados, prolongados en exceso o que no muestran resultados satisfactorios.",
    caseApplies: "Tratamientos detenidos en el tiempo, dudas con el plan actual o insatisfacción con el avance."
  }
];

const getServiceIcon = (index) => {
  const props = { width: 24, height: 24, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (index) {
    case 0: // Infantil: Smile Face
      return (
        <svg {...props}>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={3} />
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={3} />
        </svg>
      );
    case 1: // Adultos: Profiles
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 2: // Invisalign: Sparkly Shield
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 3: // Estética: Gem / Diamond
      return (
        <svg {...props}>
          <path d="M6 3h12l4 6-10 13L2 9z" />
          <path d="M11 3 8 9l4 13 4-13-3-6" />
          <path d="M2 9h20" />
        </svg>
      );
    case 4: // Bruxismo: ECG Activity
      return (
        <svg {...props}>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case 5: // Rehabilitación: Crossed grid circles / Plus / Layout
      return (
        <svg {...props}>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v12M6 12h12" />
        </svg>
      );
    case 6: // Segunda Opinión: Question/Chat
      return (
        <svg {...props}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M9 10h.01M12 10h.01M15 10h.01" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
  }
};

const PrecisionDiagnosis = () => {
  const [openServiceIdx, setOpenServiceIdx] = useState(0);
  
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    situacion: 'Diagnóstico Clínico',
    fechaEstimada: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the date to DD/MM/YYYY for the WhatsApp message
    let formattedDate = formData.fechaEstimada;
    if (formData.fechaEstimada) {
        const [year, month, day] = formData.fechaEstimada.split('-');
        formattedDate = `${day}/${month}/${year}`;
    }

    let entryUrl = '';
    if (typeof window !== 'undefined') {
        try {
            entryUrl = sessionStorage.getItem('entryUrl') || window.location.href;
        } catch (err) {
            entryUrl = window.location.href;
        }
    }

    // 1. Send data to webhook (Make)
    fetch('https://hook.us2.make.com/znvdh5kxhgc1ouyn1o6631ykxacz1kp3', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: formData.nombre,
            apellido: formData.apellido,
            email: formData.email,
            telefono: formData.telefono,
            situacion: formData.situacion,
            fechaEstimada: formattedDate,
            pageUrl: entryUrl
        })
    }).catch(err => console.error('Error sending webhook:', err));

    // 2. Push to dataLayer for GTM
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'whatsapp_form_submitted',
            formName: 'diagnostico_precision',
            formData: {
                nombre: formData.nombre,
                apellido: formData.apellido,
                email: formData.email,
                telefono: formData.telefono,
                situacion: formData.situacion,
                fechaEstimada: formattedDate,
                pageUrl: entryUrl
            }
        });
    }

    // 3. Open WhatsApp redirect
    const message = `Hola Dr. Rajevic, me gustaría solicitar más información. Estos son mis datos:
- Nombre: ${formData.nombre} ${formData.apellido}
- Correo: ${formData.email}
- Teléfono: ${formData.telefono}
- Situación/Servicio: ${formData.situacion}
- Fecha estimada de visita: ${formattedDate}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/56937784243?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Scroll to section helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF", color: "var(--color-primary)", fontFamily: "var(--font-body)" }}>
      
      {/* 2. SIMPLIFIED HEADER */}
      <header style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "#FFFFFF",
        borderBottom: "1px solid rgba(19, 52, 71, 0.06)",
        padding: "1.2rem 5vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Image src={isotypeImg} alt="Ortodoncia Rajevic" width={38} height={38} priority />
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.1rem",
            fontWeight: "700",
            color: "var(--color-primary)",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            Ortodoncia Rajevic
          </span>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section style={{
        background: "#F4F8FB",
        padding: "clamp(8.5rem, 12vw, 11rem) 5vw clamp(3rem, 6vw, 6rem) 5vw",
        overflow: "hidden"
      }}>
        <div className="container responsive-grid-hero">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", margin: "0 auto" }}
          >
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              fontSize: "0.9rem",
              fontWeight: "700",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-secondary)",
              marginBottom: "1.5rem"
            }}>
              Diagnóstico de Precisión · Dr. Zdenko Rajevic
            </div>

            <h1 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              fontWeight: "400",
              lineHeight: "1.2",
              color: "var(--color-primary)",
              marginBottom: "1.5rem"
            }}>
              Antes de recomendarte cualquier tratamiento,<br />
              <span style={{ fontStyle: "italic", color: "var(--color-secondary)", borderBottom: "2px solid #C8A96E" }}>necesito entender qué te está pasando.</span>
            </h1>

            <p style={{
              fontSize: "1.2rem",
              lineHeight: "1.7",
              color: "var(--color-text-light)",
              maxWidth: "42ch",
              marginBottom: "2.5rem"
            }}>
              En una consulta de 45 minutos sabrás exactamente qué está pasando en tu boca, por qué, y cuáles son tus opciones reales con un plan clínico estructurado. Sin presiones comerciales.
            </p>

            <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem" }}>
              <button 
                onClick={() => scrollToSection("cta-reserva")} 
                className="btn btn-primary"
                style={{ 
                  padding: "1rem 2.2rem", 
                  fontSize: "0.95rem", 
                  fontWeight: "600",
                  boxShadow: "0 4px 14px rgba(19, 52, 71, 0.15)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                Quiero entender mi caso <BsArrowRight />
              </button>
              <button 
                onClick={() => scrollToSection("metodologia")} 
                className="btn"
                style={{ 
                  backgroundColor: "transparent",
                  color: "var(--color-primary)",
                  border: "1px solid var(--color-primary)",
                  padding: "1rem 2.2rem", 
                  fontSize: "0.95rem", 
                  fontWeight: "600"
                }}
              >
                Ver protocolo de trabajo
              </button>
            </div>

            {/* Desktop Only Google Rating */}
            <div className="desktop-only" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
              <div style={{ display: "flex", gap: "2px", color: "#C8A96E", fontSize: "1.1rem" }}>
                <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
              </div>
              <div style={{ fontSize: "0.95rem", color: "var(--color-text-light)", lineHeight: "1.4" }}>
                <strong style={{ color: "var(--color-primary)" }}>5.0 en Google</strong> · 25 reseñas de pacientes reales<br />
                <span>Más de 35 años tratando gente y rehabilitando sonrisas</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image / Center Image on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-image-container"
          >
            {/* Image Wrapper */}
            <div className="hero-image-wrapper">
              <Image 
                src={drRajevicImg} 
                alt="Dr. Zdenko Rajevic, Especialista en Ortodoncia" 
                fill 
                priority
                style={{ objectFit: "contain" }} 
              />
            </div>

            {/* Mobile Only Google Rating (renders under the image on mobile) */}
            <div className="mobile-only" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", marginTop: "1.5rem", textAlign: "center", width: "100%" }}>
              <div style={{ display: "flex", gap: "2px", color: "#C8A96E", fontSize: "1.1rem" }}>
                <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
              </div>
              <div style={{ fontSize: "0.95rem", color: "var(--color-text-light)", lineHeight: "1.4" }}>
                <strong style={{ color: "var(--color-primary)" }}>5.0 en Google</strong> · 25 reseñas reales<br />
                <span>Más de 35 años tratando gente</span>
              </div>
            </div>

          </motion.div>

        </div>
      </section>



      {/* 5. PROBLEMS SECTION */}
      <section className="responsive-section" style={{ background: "#FFFFFF" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <span style={{
              fontSize: "0.95rem",
              fontWeight: "700",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-secondary)",
              display: "block",
              marginBottom: "0.5rem"
            }}>
              ¿Te suena alguno de estos?
            </span>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              color: "var(--color-primary)",
              fontWeight: "400",
              marginTop: "0.5rem",
              marginBottom: "1.5rem",
              lineHeight: "1.2"
            }}>
              Lo que nadie te explicó cuando empezaste a preocuparte
            </h2>
            <p style={{ 
              color: "var(--color-text-light)", 
              maxWidth: "700px", 
              margin: "0 auto",
              fontSize: "1.15rem",
              lineHeight: "1.6"
            }}>
              En 35 años he atendido a cientos de pacientes que llegaron con las mismas dudas. No porque fueran descuidados, sino porque nadie se tomó el tiempo de explicarles lo que realmente estaba pasando.
            </p>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "2rem" 
          }}>
            {/* Card A */}
            <div className="card" style={{
              padding: "2.5rem 2rem",
              backgroundColor: "#F4F8FB",
              border: "1px solid rgba(19, 52, 71, 0.05)",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              boxShadow: "0 4px 20px rgba(19, 52, 71, 0.02)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(200, 169, 110, 0.12)",
                  color: "#C8A96E",
                  fontSize: "1.25rem",
                  flexShrink: 0
                }}>
                  <BsArrowCounterclockwise />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "var(--color-primary)",
                  margin: 0
                }}>
                  El resultado no duró
                </h3>
              </div>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-light)", lineHeight: "1.6", margin: 0 }}>
                Alinear tus dientes sin corregir la mordida hará que se vuelvan a enchuecar.
              </p>
            </div>

            {/* Card B */}
            <div className="card" style={{
              padding: "2.5rem 2rem",
              backgroundColor: "#F4F8FB",
              border: "1px solid rgba(19, 52, 71, 0.05)",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              boxShadow: "0 4px 20px rgba(19, 52, 71, 0.02)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(200, 169, 110, 0.12)",
                  color: "#C8A96E",
                  fontSize: "1.25rem",
                  flexShrink: 0
                }}>
                  <BsShieldExclamation />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "var(--color-primary)",
                  margin: 0
                }}>
                  Me desperté con dolor que antes no tenía
                </h3>
              </div>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-light)", lineHeight: "1.6", margin: 0 }}>
                Mover piezas dentales sin cuidar la articulación de tu mandíbula puede causar dolores de cabeza crónicos.
              </p>
            </div>

            {/* Card C */}
            <div className="card" style={{
              padding: "2.5rem 2rem",
              backgroundColor: "#F4F8FB",
              border: "1px solid rgba(19, 52, 71, 0.05)",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              boxShadow: "0 4px 20px rgba(19, 52, 71, 0.02)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(200, 169, 110, 0.12)",
                  color: "#C8A96E",
                  fontSize: "1.25rem",
                  flexShrink: 0
                }}>
                  <BsHourglassSplit />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "var(--color-primary)",
                  margin: 0
                }}>
                  Llevo meses en tratamiento y no pasa nada
                </h3>
              </div>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-light)", lineHeight: "1.6", margin: 0 }}>
                Si tras seis meses no ves avances reales, tu plan inicial probablemente necesita un ajuste.
              </p>
            </div>

            {/* Card D */}
            <div className="card" style={{
              padding: "2.5rem 2rem",
              backgroundColor: "#F4F8FB",
              border: "1px solid rgba(19, 52, 71, 0.05)",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              boxShadow: "0 4px 20px rgba(19, 52, 71, 0.02)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(200, 169, 110, 0.12)",
                  color: "#C8A96E",
                  fontSize: "1.25rem",
                  flexShrink: 0
                }}>
                  <BsChatLeftText />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "var(--color-primary)",
                  margin: 0
                }}>
                  Nadie me explicó qué tengo realmente
                </h3>
              </div>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-light)", lineHeight: "1.6", margin: 0 }}>
                No deberías usar aparatos sin entender el proceso.
              </p>
            </div>

            {/* Card E */}
            <div className="card" style={{
              padding: "2.5rem 2rem",
              backgroundColor: "#F4F8FB",
              border: "1px solid rgba(19, 52, 71, 0.05)",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              boxShadow: "0 4px 20px rgba(19, 52, 71, 0.02)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(200, 169, 110, 0.12)",
                  color: "#C8A96E",
                  fontSize: "1.25rem",
                  flexShrink: 0
                }}>
                  <BsQuestionCircle />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "var(--color-primary)",
                  margin: 0
                }}>
                  Quiero corregir mi sonrisa pero me da miedo equivocarme
                </h3>
              </div>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-light)", lineHeight: "1.6", margin: 0 }}>
                Con tantas ofertas comerciales es difícil elegir de forma segura.
              </p>
            </div>

            {/* Card F */}
            <div className="card" style={{
              padding: "2.5rem 2rem",
              backgroundColor: "#F4F8FB",
              border: "1px solid rgba(19, 52, 71, 0.05)",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              boxShadow: "0 4px 20px rgba(19, 52, 71, 0.02)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(200, 169, 110, 0.12)",
                  color: "#C8A96E",
                  fontSize: "1.25rem",
                  flexShrink: 0
                }}>
                  <BsCashStack />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "var(--color-primary)",
                  margin: 0
                }}>
                  Costos ocultos y cobros innecesarios
                </h3>
              </div>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-light)", lineHeight: "1.6", margin: 0 }}>
                Evita sorpresas de presupuesto o aparatos innecesarios a mitad de camino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY RAJEVIC SECTION */}
      <section id="porque-rajevic" className="responsive-section" style={{ background: "#F4F8FB" }}>
        <div className="container responsive-grid-why">
          
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <span style={{
              fontSize: "0.9rem",
              fontWeight: "700",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-secondary)",
              marginBottom: "1rem",
              display: "block"
            }}>
              Criterio Médico vs Criterio Comercial
            </span>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              color: "var(--color-primary)",
              lineHeight: "1.2",
              marginBottom: "3rem"
            }}>
              No vendo tratamientos.<br />
              <span style={{ fontStyle: "italic", color: "var(--color-secondary)" }}>Entrego diagnósticos honestos.</span>
            </h2>

            {/* List with Tooth Icons */}
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "2rem",
              marginTop: "1.5rem",
              width: "100%",
              maxWidth: "500px",
              textAlign: "left"
            }}>
              {/* Item 1 */}
              <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(44, 112, 155, 0.1)",
                  color: "var(--color-secondary)",
                  fontSize: "1.3rem",
                  flexShrink: 0
                }}>
                  <FaTooth />
                </div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "400", color: "var(--color-primary)", margin: 0 }}>
                  Atendido siempre por el mismo especialista
                </h4>
              </div>

              {/* Item 2 */}
              <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(44, 112, 155, 0.1)",
                  color: "var(--color-secondary)",
                  fontSize: "1.3rem",
                  flexShrink: 0
                }}>
                  <FaTooth />
                </div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "400", color: "var(--color-primary)", margin: 0 }}>
                  35 años tratando gente, no una clínica de paso
                </h4>
              </div>

              {/* Item 3 */}
              <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(44, 112, 155, 0.1)",
                  color: "var(--color-secondary)",
                  fontSize: "1.3rem",
                  flexShrink: 0
                }}>
                  <FaTooth />
                </div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "400", color: "var(--color-primary)", margin: 0 }}>
                  Estudio integral previo a cualquier aparato
                </h4>
              </div>

              {/* Item 4 */}
              <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(44, 112, 155, 0.1)",
                  color: "var(--color-secondary)",
                  fontSize: "1.3rem",
                  flexShrink: 0
                }}>
                  <FaTooth />
                </div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "400", color: "var(--color-primary)", margin: 0 }}>
                  Ética clínica: si no te hace falta, te lo digo
                </h4>
              </div>

            </div>
          </div>

          {/* Right Column (Image 1 as background cover) */}
          <div className="clinic-image-container">
            <Image 
              src={img1} 
              alt="Instalaciones de Ortodoncia Rajevic" 
              fill 
              style={{ objectFit: "cover" }}
            />
          </div>

        </div>
      </section>

      {/* 8. METHODOLOGY SECTION */}
      <section id="metodologia" className="responsive-section" style={{ background: "#FFFFFF" }}>
        <div className="container responsive-grid-methodology">
          
          {/* Steps column */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{
              fontSize: "0.9rem",
              fontWeight: "700",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-secondary)",
              marginBottom: "1rem",
              display: "block",
              textAlign: "center"
            }}>
              Nuestro Protocolo Clínico
            </span>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              color: "var(--color-primary)",
              lineHeight: "1.2",
              marginBottom: "3rem",
              textAlign: "center"
            }}>
              Qué haré en tu primera <em>consulta</em> de diagnóstico
            </h2>

            {/* Vertical Timeline for Steps */}
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              position: "relative",
              paddingLeft: "0.5rem"
            }}>
              {/* Vertical connecting line */}
              <div style={{
                position: "absolute",
                left: "19px", // centered on the 40px circle
                top: "2.5rem",
                bottom: "2.5rem",
                width: "2px",
                backgroundColor: "rgba(19, 52, 71, 0.1)",
                zIndex: 1
              }} />

              {/* Step 1 */}
              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2.5rem", position: "relative", zIndex: 2 }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-primary)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  flexShrink: 0
                }}>
                  01
                </div>
                <div style={{ flex: 1, paddingTop: "0.4rem" }}>
                  <p style={{ fontSize: "1.1rem", color: "var(--color-text-light)", lineHeight: "1.6", margin: 0 }}>
                    Palpamos tu mandíbula para descartar desgastes, ruidos o problemas de mordida antes de mover dientes.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2.5rem", position: "relative", zIndex: 2 }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-primary)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  flexShrink: 0
                }}>
                  02
                </div>
                <div style={{ flex: 1, paddingTop: "0.4rem" }}>
                  <p style={{ fontSize: "1.1rem", color: "var(--color-text-light)", lineHeight: "1.6", margin: 0 }}>
                    Verificamos la base biológica (raíz y hueso) para asegurar que los movimientos sean viables y seguros.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2.5rem", position: "relative", zIndex: 2 }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-primary)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  flexShrink: 0
                }}>
                  03
                </div>
                <div style={{ flex: 1, paddingTop: "0.4rem" }}>
                  <p style={{ fontSize: "1.1rem", color: "var(--color-text-light)", lineHeight: "1.6", margin: 0 }}>
                    Tomamos un registro intraoral tridimensional para simular mediante software la alineaicón final de tus dientes.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div style={{ display: "flex", gap: "1.5rem", position: "relative", zIndex: 2 }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-primary)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  flexShrink: 0
                }}>
                  04
                </div>
                <div style={{ flex: 1, paddingTop: "0.4rem" }}>
                  <p style={{ fontSize: "1.1rem", color: "var(--color-text-light)", lineHeight: "1.6", margin: 0 }}>
                    Te entregamos un informe claro con los objetivos, plazos y costos cerrados sin cargos ocultos.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Sticky Offer Card */}
          <div style={{ position: "sticky", top: "7rem" }}>
            <div style={{
              backgroundColor: "#F4F8FB",
              border: "1px solid rgba(19, 52, 71, 0.08)",
              borderRadius: "8px",
              padding: "2.5rem",
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.03)"
            }}>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                color: "var(--color-primary)",
                fontWeight: "600",
                marginBottom: "1.5rem"
              }}>
                Tu Diagnóstico Incluye
              </h3>

              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                <li style={{ display: "flex", alignItems: "start", gap: "0.6rem", fontSize: "1rem", color: "var(--color-primary)" }}>
                  <BsCheckCircle style={{ color: "var(--color-secondary)", fontSize: "1.2rem", flexShrink: 0, marginTop: "2px" }} />
                  <span>45 minutos de consulta directa con el Dr. Zdenko Rajevic</span>
                </li>
                <li style={{ display: "flex", alignItems: "start", gap: "0.6rem", fontSize: "1rem", color: "var(--color-primary)" }}>
                  <BsCheckCircle style={{ color: "var(--color-secondary)", fontSize: "1.2rem", flexShrink: 0, marginTop: "2px" }} />
                  <span>Análisis completo de articulación temporomandibular (ATM)</span>
                </li>
                <li style={{ display: "flex", alignItems: "start", gap: "0.6rem", fontSize: "1rem", color: "var(--color-primary)" }}>
                  <BsCheckCircle style={{ color: "var(--color-secondary)", fontSize: "1.2rem", flexShrink: 0, marginTop: "2px" }} />
                  <span>Evaluación de encías, soporte óseo periodontal y raíces dentales</span>
                </li>
                <li style={{ display: "flex", alignItems: "start", gap: "0.6rem", fontSize: "1rem", color: "var(--color-primary)" }}>
                  <BsCheckCircle style={{ color: "var(--color-secondary)", fontSize: "1.2rem", flexShrink: 0, marginTop: "2px" }} />
                  <span>Simulación virtual intraoral de resultado esperado</span>
                </li>
                <li style={{ display: "flex", alignItems: "start", gap: "0.6rem", fontSize: "1rem", color: "var(--color-primary)" }}>
                  <BsCheckCircle style={{ color: "var(--color-secondary)", fontSize: "1.2rem", flexShrink: 0, marginTop: "2px" }} />
                  <span>Informe impreso del plan clínico y presupuesto cerrado</span>
                </li>
              </ul>

              {/* Price Tag */}
              <div style={{
                backgroundColor: "var(--color-primary)",
                color: "#FFFFFF",
                borderRadius: "6px",
                padding: "1.2rem",
                textAlign: "center",
                marginBottom: "1.5rem"
              }}>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "1px" }}>Valor del Diagnóstico</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "2.4rem", color: "#C8A96E", fontWeight: "700", margin: "0.2rem 0" }}>$45.000 CLP</div>
                <div style={{ 
                  fontSize: "0.95rem", 
                  color: "#FFFFFF", 
                  fontWeight: "700", 
                  backgroundColor: "rgba(200, 169, 110, 0.2)", 
                  padding: "0.6rem 0.8rem", 
                  borderRadius: "4px", 
                  border: "1px solid #C8A96E", 
                  marginTop: "0.8rem",
                  lineHeight: "1.4"
                }}>
                  Si decides tratarte, se abona al costo total de tu tratamiento.
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <button 
                  onClick={() => scrollToSection("cta-reserva")}
                  className="btn"
                  style={{ 
                    width: "100%", 
                    padding: "1.1rem", 
                    fontWeight: "700", 
                    fontSize: "1.1rem", 
                    borderRadius: "4px",
                    backgroundColor: "#25D366",
                    color: "#FFFFFF",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    boxShadow: "0 6px 18px rgba(37, 211, 102, 0.25)",
                    cursor: "pointer"
                  }}
                >
                  <FaWhatsapp style={{ fontSize: "1.3rem" }} /> Agendar mi turno
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8.5 SERVICES SECTION */}
      <section id="servicios" className="responsive-section" style={{ background: "#F4F8FB" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="text-center" style={{ textAlign: "center", marginBottom: "1rem" }}>
            <span style={{
              fontSize: "0.9rem",
              fontWeight: "700",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-secondary)",
              marginBottom: "1rem",
              display: "block"
            }}>
              Nuestras Especialidades
            </span>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              color: "var(--color-primary)",
              lineHeight: "1.2",
              marginBottom: "1.5rem"
            }}>
              Servicios Clínicos de Ortodoncia y ATM
            </h2>
            <p style={{
              fontSize: "1.1rem",
              color: "var(--color-text-light)",
              lineHeight: "1.6",
              maxWidth: "700px",
              margin: "0 auto 3rem auto"
            }}>
              Un enfoque clínico y personalizado orientado a solucionar tus necesidades de salud y funcionalidad, sin criterios comerciales.
            </p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {servicesData.map((service, index) => {
              const isOpen = openServiceIdx === index;
              return (
                <div key={index} style={{ display: "flex", flexDirection: "column" }}>
                  {/* Header */}
                  <div
                    onClick={() => setOpenServiceIdx(isOpen ? null : index)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1.2rem 1.5rem",
                      cursor: "pointer",
                      backgroundColor: "#FFFFFF",
                      borderRadius: isOpen ? "8px 8px 0 0" : "8px",
                      border: "1px solid rgba(19, 52, 71, 0.08)",
                      borderBottom: isOpen ? "none" : "1px solid rgba(19, 52, 71, 0.08)",
                      transition: "background-color 0.2s ease, box-shadow 0.2s ease",
                      boxShadow: isOpen ? "0 4px 12px rgba(19, 52, 71, 0.03)" : "none"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div style={{ color: "var(--color-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {getServiceIcon(index)}
                      </div>
                      <h3 style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.15rem",
                        color: "var(--color-primary)",
                        fontWeight: "600",
                        margin: 0
                      }}>
                        {service.title}
                      </h3>
                    </div>
                    <div style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      color: "var(--color-secondary)",
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>

                  {/* Expandable Content with Framer Motion */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    style={{ overflow: "hidden" }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div style={{
                      padding: "0 1.5rem 1.5rem 1.5rem",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "0 0 8px 8px",
                      border: "1px solid rgba(19, 52, 71, 0.08)",
                      borderTop: "none",
                      boxShadow: "0 8px 16px rgba(19, 52, 71, 0.04)"
                    }}>
                      <div style={{ paddingLeft: "2.5rem" }}>
                        <span className="service-badge" style={{ marginBottom: "0.8rem", display: "inline-block" }}>{service.badge}</span>
                        <p style={{
                          fontSize: "0.95rem",
                          color: "var(--color-text-light)",
                          lineHeight: "1.6",
                          margin: "0 0 1.2rem 0"
                        }}>
                          {service.description}
                        </p>
                        <div style={{
                          borderTop: "1px solid rgba(19, 52, 71, 0.05)",
                          paddingTop: "0.8rem"
                        }}>
                          <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--color-primary)", display: "block", marginBottom: "0.2rem" }}>Para qué caso aplica:</span>
                          <span style={{ fontSize: "0.9rem", color: "var(--color-text-light)" }}>{service.caseApplies}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SECTION */}
      <section className="responsive-section" style={{ paddingLeft: 0, paddingRight: 0, background: "#FFFFFF", overflow: "hidden" }}>
        <div className="text-center" style={{ marginBottom: "4rem", padding: "0 5vw" }}>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            color: "var(--color-primary)",
            fontWeight: "400",
            lineHeight: "1.2"
          }}>
            Lo que opinan mis pacientes
          </h2>
        </div>

        {/* CSS Keyframes and Responsive Classes Inject */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideTestimonials {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .testimonials-slider {
            display: flex;
            width: max-content;
            gap: 1.5rem;
            animation: slideTestimonials 120s linear infinite;
            padding: 1rem 0;
          }
          .testimonials-slider:hover {
            animation-play-state: paused;
          }

          /* Services Section Styles */
          .services-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            width: 100%;
            margin-top: 3rem;
          }
          @media (min-width: 600px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          .service-card {
            background: #FFFFFF;
            border-radius: 8px;
            padding: 2.2rem 2rem;
            border: 1px solid rgba(19, 52, 71, 0.06);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.01);
          }
          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 30px rgba(19, 52, 71, 0.05);
            border-color: var(--color-secondary);
          }
          .service-badge {
            display: inline-block;
            align-self: flex-start;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 700;
            color: var(--color-secondary);
            background: rgba(200, 169, 110, 0.1);
            padding: 0.25rem 0.6rem;
            border-radius: 4px;
            margin-bottom: 1.2rem;
          }

          /* Responsive Layout Classes */
          .responsive-section {
            padding: 3.5rem 5vw;
          }
          @media (min-width: 900px) {
            .responsive-section {
              padding: 6rem 5vw;
            }
          }

          .responsive-grid-hero {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;
            align-items: center;
          }
          @media (min-width: 900px) {
            .responsive-grid-hero {
              grid-template-columns: 1.1fr 0.9fr;
              gap: 4rem;
            }
          }

          .hero-image-container {
            position: relative;
            width: 100%;
            height: auto;
            min-height: 480px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          @media (min-width: 900px) {
            .hero-image-container {
              min-height: 760px;
              height: 100%;
            }
          }

          .hero-image-wrapper {
            position: relative;
            width: 100%;
            height: 400px;
            z-index: 2;
          }
          @media (min-width: 900px) {
            .hero-image-wrapper {
              height: 760px;
            }
          }

          .responsive-grid-why {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            align-items: stretch;
          }
          @media (min-width: 900px) {
            .responsive-grid-why {
              grid-template-columns: 1.1fr 0.9fr;
              gap: 5vw;
            }
          }

          .clinic-image-container {
            position: relative;
            width: 100%;
            min-height: 250px;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(19, 52, 71, 0.08);
          }
          @media (min-width: 900px) {
            .clinic-image-container {
              min-height: 500px;
            }
          }

          .responsive-grid-methodology {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;
            align-items: start;
          }
          @media (min-width: 900px) {
            .responsive-grid-methodology {
              grid-template-columns: 1fr 1.1fr;
              gap: 6vw;
            }
          }

          .cta-info-row {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            margin-bottom: 2.5rem;
            width: 100%;
            align-items: center;
          }
          @media (min-width: 900px) {
            .cta-info-row {
              flex-direction: row;
              justify-content: center;
              gap: 3rem;
            }
          }
        `}} />

        {/* Carousel Container */}
        <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
          {/* Subtle gradient overlays to fade reviews on edges */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "15vw",
            height: "100%",
            background: "linear-gradient(to right, #FFFFFF, transparent)",
            zIndex: 3,
            pointerEvents: "none"
          }} />
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "15vw",
            height: "100%",
            background: "linear-gradient(to left, #FFFFFF, transparent)",
            zIndex: 3,
            pointerEvents: "none"
          }} />

          {/* Sliding Track */}
          <div className="testimonials-slider">
            {testimonialsData.concat(testimonialsData).map((t, idx) => (
              <div 
                key={idx} 
                className="card" 
                style={{
                  width: "380px",
                  padding: "2.5rem 2rem",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  border: "1px solid rgba(19,52,71,0.05)",
                  boxShadow: "0 8px 30px rgba(19, 52, 71, 0.01)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexShrink: 0
                }}
              >
                <div>
                  <div style={{ display: "flex", gap: "2px", color: "#C8A96E", fontSize: "0.95rem", marginBottom: "1rem" }}>
                    <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                  </div>
                  <p style={{
                    fontSize: "1.05rem",
                    color: "var(--color-primary)",
                    fontStyle: "italic",
                    lineHeight: "1.6",
                    marginBottom: "1.5rem",
                    margin: 0
                  }}>
                    "{t.text}"
                  </p>
                </div>
                <div style={{ marginTop: "1.5rem", borderTop: "1px solid rgba(19, 52, 71, 0.05)", paddingTop: "1rem" }}>
                  <div style={{ fontSize: "1rem", fontWeight: "700", color: "var(--color-primary)" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-text-light)", marginTop: "0.2rem" }}>
                    {t.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem", padding: "0 5vw" }}>
          <a 
            href="https://www.google.com/search?q=ortodoncia+rajevic+vitacura&oq=or&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MgYIABBFGDwyCAgBEEUYJxg7MgYIAhBFGD0yBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYQTIGCAcQRRhB0gEIMjE2MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              fontSize: "1rem",
              color: "var(--color-secondary)",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              borderBottom: "1px dashed var(--color-secondary)",
              paddingBottom: "2px"
            }}
          >
            Ver todas las reseñas en Google Business →
          </a>
        </div>
      </section>

      {/* 10. BOOKING CTA SECTION */}
      <section id="cta-reserva" className="responsive-section" style={{
        background: "#133447",
        color: "#FFFFFF",
        position: "relative",
        padding: "4rem 0"
      }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          
          <div className="grid-2" style={{ alignItems: 'start', gap: '3rem' }}>
            
            {/* LEFT COLUMN: Info */}
            <div style={{ textAlign: "left" }}>
              <span style={{
                fontSize: "0.9rem",
                fontWeight: "700",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#C8A96E",
                marginBottom: "1rem",
                display: "block"
              }}>
                Agenda tu hora de evaluación
              </span>
              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)",
                color: "#FFFFFF",
                lineHeight: "1.15",
                marginBottom: "1.5rem"
              }}>
                Comencemos con <span style={{ fontStyle: "italic", color: "#C8A96E" }}>certeza clínica.</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.15rem", lineHeight: "1.7", marginBottom: "2.5rem", maxWidth: "55ch" }}>
                Una evaluación clínica presencial de 45 minutos. Si determinamos que no necesitas ortodoncia, te lo diremos abiertamente en esa misma cita.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginBottom: "2rem" }}>
                
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "1.05rem", color: "rgba(255,255,255,0.85)" }}>
                  <BsGeoAlt style={{ color: "#C8A96E", fontSize: "1.3rem", flexShrink: 0 }} />
                  <span>Las Hualtatas 8999, Oficina 402, Vitacura, Santiago</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "1.05rem", color: "rgba(255,255,255,0.85)" }}>
                  <BsClock style={{ color: "#C8A96E", fontSize: "1.3rem", flexShrink: 0 }} />
                  <span>Lunes a Viernes · 9:00 a 19:00 hrs.</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "1.05rem", color: "rgba(255,255,255,0.85)" }}>
                  <BsTelephone style={{ color: "#C8A96E", fontSize: "1.3rem", flexShrink: 0 }} />
                  <a href="tel:+56937784243" style={{ color: "inherit", textDecoration: "none" }}>Teléfono directo: +56 9 3778 4243</a>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: WhatsApp Reservation Form */}
            <div style={{ width: '100%' }}>
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                width: '100%',
                color: 'var(--color-primary)'
              }}>
                <p style={{ 
                  marginBottom: '1.5rem', 
                  color: 'var(--color-text-light)', 
                  fontSize: '0.95rem', 
                  lineHeight: '1.5',
                  textAlign: 'center'
                }}>
                  Completa tus datos en el siguiente formulario para coordinar tu cita directamente por WhatsApp.
                </p>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label htmlFor="nombre" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>Nombre *</label>
                      <input 
                        type="text" 
                        id="nombre" 
                        name="nombre" 
                        required 
                        value={formData.nombre} 
                        onChange={handleChange} 
                        placeholder="Ej. Juan"
                        style={{
                          padding: '0.7rem 0.9rem',
                          borderRadius: '4px',
                          border: '1px solid var(--color-border)',
                          fontSize: '16px',
                          fontFamily: 'var(--font-body)',
                          outline: 'none',
                          width: '100%',
                          color: 'var(--color-text)',
                          minHeight: '44px',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                    <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label htmlFor="apellido" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>Apellido *</label>
                      <input 
                        type="text" 
                        id="apellido" 
                        name="apellido" 
                        required 
                        value={formData.apellido} 
                        onChange={handleChange} 
                        placeholder="Ej. Pérez"
                        style={{
                          padding: '0.7rem 0.9rem',
                          borderRadius: '4px',
                          border: '1px solid var(--color-border)',
                          fontSize: '16px',
                          fontFamily: 'var(--font-body)',
                          outline: 'none',
                          width: '100%',
                          color: 'var(--color-text)',
                          minHeight: '44px',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>Correo Electrónico *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Ej. juan.perez@email.com"
                        style={{
                          padding: '0.7rem 0.9rem',
                          borderRadius: '4px',
                          border: '1px solid var(--color-border)',
                          fontSize: '16px',
                          fontFamily: 'var(--font-body)',
                          outline: 'none',
                          width: '100%',
                          color: 'var(--color-text)',
                          minHeight: '44px',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                    <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label htmlFor="telefono" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>Teléfono *</label>
                      <input 
                        type="tel" 
                        id="telefono" 
                        name="telefono" 
                        required 
                        value={formData.telefono} 
                        onChange={handleChange} 
                        placeholder="Ej. +56 9 1234 5678"
                        style={{
                          padding: '0.7rem 0.9rem',
                          borderRadius: '4px',
                          border: '1px solid var(--color-border)',
                          fontSize: '16px',
                          fontFamily: 'var(--font-body)',
                          outline: 'none',
                          width: '100%',
                          color: 'var(--color-text)',
                          minHeight: '44px',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label htmlFor="situacion" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>Servicio requerido *</label>
                      <select 
                        id="situacion" 
                        name="situacion" 
                        required 
                        value={formData.situacion} 
                        onChange={handleChange}
                        style={{
                          padding: '0.7rem 0.9rem',
                          borderRadius: '4px',
                          border: '1px solid var(--color-border)',
                          fontSize: '16px',
                          fontFamily: 'var(--font-body)',
                          backgroundColor: 'white',
                          outline: 'none',
                          width: '100%',
                          cursor: 'pointer',
                          color: 'var(--color-text)',
                          minHeight: '44px',
                          boxSizing: 'border-box'
                        }}
                      >
                        <option value="Diagnóstico Clínico">Diagnóstico Clínico</option>
                        <option value="Ortodoncia Infantil">Ortodoncia Infantil</option>
                        <option value="Ortodoncia Adultos">Ortodoncia Adultos</option>
                        <option value="Invisalign">Invisalign (Ortodoncia Invisible)</option>
                        <option value="Bruxismo y ATM">Bruxismo y ATM (Planos de Relajación)</option>
                        <option value="Rehabilitación Oral">Rehabilitación Oral</option>
                        <option value="Segunda Opinión">Segunda Opinión</option>
                      </select>
                    </div>
                    <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label htmlFor="fechaEstimada" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-primary)' }}>Fecha estimada de visita *</label>
                      <input 
                        type="date" 
                        id="fechaEstimada" 
                        name="fechaEstimada" 
                        required 
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.fechaEstimada} 
                        onChange={handleChange}
                        style={{
                          padding: '0.7rem 0.9rem',
                          borderRadius: '4px',
                          border: '1px solid var(--color-border)',
                          fontSize: '16px',
                          fontFamily: 'var(--font-body)',
                          outline: 'none',
                          width: '100%',
                          color: 'var(--color-text)',
                          backgroundColor: 'white',
                          minHeight: '44px',
                          cursor: 'pointer',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    style={{
                      marginTop: '0.8rem',
                      padding: '1rem 2rem',
                      borderRadius: '4px',
                      backgroundColor: '#25D366',
                      color: 'white',
                      border: 'none',
                      fontSize: '1.05rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.8rem',
                      transition: 'background-color 0.2s, transform 0.1s',
                      fontFamily: 'var(--font-body)',
                      width: '100%',
                      minHeight: '48px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#128C7E'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
                    onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                    onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <FaWhatsapp size={24} />
                    Solicitar evaluación vía WhatsApp
                  </button>
                </form>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11. SIMPLIFIED FOOTER */}
      <footer style={{
        background: "#0A1E2B",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "1.5rem 5vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Image src={isotypeImg} alt="Ortodoncia Rajevic" width={38} height={38} style={{ display: "block" }} />
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.1rem",
            fontWeight: "700",
            color: "#FFFFFF",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            Ortodoncia Rajevic
          </span>
        </div>
      </footer>

    </div>
  );
};

export default PrecisionDiagnosis;
