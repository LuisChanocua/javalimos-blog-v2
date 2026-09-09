import type { Activity } from "@/types/content";

/**
 * Próximas actividades.
 * Vacío a propósito: no se inventan eventos. Al agregar un objeto aquí,
 * la sección aparece automáticamente en Home y en Lo que hacemos.
 */
export const upcomingActivities: Activity[] = [];

export const participationLabels: Record<Activity["participation"], string> = {
  "abierto-al-publico": "Abierto al público",
  "registro-requerido": "Registro requerido",
  "actividad-institucional": "Actividad institucional",
};

export const modeLabels: Record<Activity["mode"], string> = {
  presencial: "Presencial",
  "en-linea": "En línea",
  hibrida: "Híbrida",
};

export const statusLabels: Record<Activity["status"], string> = {
  programada: "Programada",
  "por-confirmar": "Por confirmar",
  finalizada: "Finalizada",
};
