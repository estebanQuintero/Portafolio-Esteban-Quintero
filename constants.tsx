
import React from 'react';
import { 
  Layout, CheckCircle, Code, Users, Zap, Terminal, 
  FileText, Target, Edit3, Box, CheckCircle2, GitBranch, 
  PlayCircle, GitMerge, ShieldCheck, Bell, BarChart3, Search
} from 'lucide-react';
import { Experience, Education, SkillCategory } from './types';

export const WORKFLOW_STEPS = [
  {
    title: "Creación de Plan de Pruebas",
    desc: "Estructuración del documento maestro que define la estrategia de calidad.",
    icon: <FileText className="w-6 h-6" />,
    imageMock: "test_plan.png"
  },
  {
    title: "Definición de Alcance",
    desc: "Identificación de funcionalidades críticas y fronteras del testing automatizado.",
    icon: <Target className="w-6 h-6" />,
    imageMock: "scope.png"
  },
  {
    title: "Diseño de Casos de Prueba",
    desc: "Escritura de escenarios Gherkin detallados alineados con los requerimientos del negocio.",
    icon: <Edit3 className="w-6 h-6" />,
    imageMock: "test_cases.png"
  },
  {
    title: "Creación del Proyecto Base",
    desc: "Configuración inicial de la arquitectura Screenplay y Serenity BDD desde cero.",
    icon: <Box className="w-6 h-6" />,
    imageMock: "base_project.png"
  },
  {
    title: "Check de Automatización",
    desc: "Validación uno a uno de los diseños de casos automatizados vs la implementación.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    imageMock: "checking.png"
  },
  {
    title: "Push a GitLab",
    desc: "Subida de cambios a una rama feature/funcionalidad siguiendo estándares de GitFlow.",
    icon: <GitBranch className="w-6 h-6" />,
    imageMock: "gitlab_push.png"
  },
  {
    title: "Ejecución del Pipeline",
    desc: "Visualización de la ejecución automática de pruebas de regresión al subir los cambios.",
    icon: <PlayCircle className="w-6 h-6" />,
    imageMock: "pipeline_run.png"
  },
  {
    title: "Merge a Development",
    desc: "Integración de la funcionalidad en la rama principal una vez superados los checks.",
    icon: <GitMerge className="w-6 h-6" />,
    imageMock: "merge_dev.png"
  },
  {
    title: "Análisis con SonarQube",
    desc: "Ejecución y revisión automática de calidad de código directamente desde GitLab.",
    icon: <ShieldCheck className="w-6 h-6" />,
    imageMock: "sonar_analysis.png"
  },
  {
    title: "Ejecución y Notificación",
    desc: "Ejecución completa en development con notificaciones automáticas de resultados.",
    icon: <Bell className="w-6 h-6" />,
    imageMock: "notifications.png"
  },
  {
    title: "Reporte Serenity BDD",
    desc: "Generación del artefacto index.html con el detalle de todos los escenarios ejecutados.",
    icon: <BarChart3 className="w-6 h-6" />,
    imageMock: "serenity_report.png"
  },
  {
    title: "Revisión de Hallazgos",
    desc: "Análisis profundo de resultados encontrados para la toma de decisiones estratégicas.",
    icon: <Search className="w-6 h-6" />,
    imageMock: "decision_making.png"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Quipux S.A.S",
    role: "Automatizador de pruebas",
    location: "Medellín, Colombia",
    period: "Diciembre 2024 – Febrero 2026",
    highlights: [
      "Automatización de nuevos proyectos apoyando el despliegue y mejora continua.",
      "Trabajo bajo metodologías ágiles con enfoque en calidad.",
      "Gestión eficiente del tiempo y priorización de tareas de alto impacto.",
      "Capacitación de nuevos talentos contratados por la compañía."
    ]
  },
  {
    company: "Casa Editorial El Tiempo",
    role: "Ingeniero Automatizador de Software Senior",
    location: "Bogotá, Colombia",
    period: "Mayo 2022 – Diciembre 2024",
    highlights: [
      "Liderazgo del área de automatización.",
      "Capacitación del equipo y actualización de proyectos para mejor mantenibilidad.",
      "Apoyo en salidas a producción garantizando regresiones exitosas.",
      "Implementación de nuevas herramientas y metodologías.",
      "Automatización de 40 proyectos empresariales con despliegues diarios.",
      "Pruebas de carga con Jmeter.",
      "Reconocimiento por entrega prioritaria de proyecto Android."
    ]
  },
  {
    company: "Sophos Solutions",
    role: "Automatizador de pruebas",
    location: "Medellín, Colombia",
    period: "Febrero 2021 – Mayo 2022",
    highlights: [
      "Asignado a entidad bancaria como analista de pruebas.",
      "Responsable de certificación de proyectos: gestión de planes, checklists y ejecución completa."
    ]
  },
  {
    company: "Accenture",
    role: "Automatizador de pruebas",
    location: "Medellín, Colombia",
    period: "Octubre 2019 – Marzo 2020",
    highlights: [
      "Especialización en Screenplay, Java, Selenium, Appium y Cucumber.",
      "Desarrollo de Historias de Usuario (HU) completas para NEQUI.",
      "Uso de Metodología SCRUM, Git y AzureDevOps.",
      "Reconocimientos por alto desempeño de jefes y pares."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Universidad Iberoamericana",
    degree: "Ingeniería de Software",
    location: "Bogotá, Colombia",
    year: "Actualmente cursando 6to semestre",
    status: "En proceso"
  },
  {
    institution: "Sena",
    degree: "Tecnólogo en análisis y desarrollo en sistemas de información",
    location: "Rionegro, Colombia",
    year: "2020"
  },
  {
    institution: "I.E Román Gómez - SENA",
    degree: "Técnico en desarrollo de software",
    location: "Marinilla, Colombia",
    year: "2017"
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    title: "Lenguajes & Frameworks",
    skills: ["Java", "Screenplay", "Serenity BDD", "Selenium", "Appium", "Cucumber", "Gherkin"]
  },
  {
    title: "DevOps & CI/CD",
    skills: ["Git", "GitLab", "Azure DevOps", "YML", "SonarQube"]
  },
  {
    title: "Estrategia de QA",
    skills: ["Diseño de Casos de Prueba", "Pruebas Manuales", "Pruebas Automatizadas", "Metodologías Ágiles", "Continuous Testing"]
  }
];

export const SOFT_SKILLS = [
  "Liderazgo desde el ejemplo",
  "Alta capacidad de adaptación",
  "Gestión del tiempo y prioridades",
  "Pensamiento crítico",
  "Orientación a resultados",
  "Trabajo colaborativo"
];

export const SERVICES = [
  {
    title: "Formación y Mentoring",
    description: "Capacito a equipos técnicos en la adopción de frameworks de automatización modernos y buenas prácticas de ingeniería de calidad.",
    icon: <Users className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Ciclo Completo de QA",
    description: "Desde pruebas exploratorias y diseño de casos, hasta la automatización total e integración en pipelines de CI/CD.",
    icon: <Zap className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Arquitecturas de Automatización",
    description: "Creación de frameworks desde cero utilizando Screenplay y Serenity BDD para asegurar escalabilidad y mantenibilidad.",
    icon: <Code className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Certificación de Software",
    description: "Gestión rigurosa de planes de prueba y checklists para garantizar despliegues a producción sin fallos críticos.",
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />
  }
];
