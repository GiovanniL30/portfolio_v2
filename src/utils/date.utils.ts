export type DateInput = Date | string | number | null | undefined;

export const toDate = (input?: DateInput): Date | null => {
  if (input === null || input === undefined) return null;
  if (input instanceof Date) return isNaN(input.getTime()) ? null : input;
  if (typeof input === "number") {
    const d = new Date(input);
    return isNaN(d.getTime()) ? null : d;
  }
  if (typeof input === "string") {
    const d = new Date(input);
    if (!isNaN(d.getTime())) return d;

    const alt = new Date(input.replace(" ", "T"));
    if (!isNaN(alt.getTime())) return alt;

    const num = Number(input);
    if (!Number.isNaN(num)) {
      const dn = new Date(num);
      if (!isNaN(dn.getTime())) return dn;
    }

    return null;
  }

  return null;
};

export const isValidDate = (input?: DateInput): input is Date => {
  const d = toDate(input);
  return d !== null;
};

export const getDateOnly = (input?: DateInput): Date | null => {
  const d = toDate(input);
  if (!d) return null;
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};

export const formatDate = (input?: DateInput, opts?: Intl.DateTimeFormatOptions & { locale?: string }): string | null => {
  const d = toDate(input);
  if (!d) return null;
  const { locale = "en-US", ...rest } = opts || {};
  const defaultOpts: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
  return new Intl.DateTimeFormat(locale, { ...defaultOpts, ...rest }).format(d);
};

export const formatTime = (input?: DateInput, opts?: Intl.DateTimeFormatOptions & { locale?: string }): string | null => {
  const d = toDate(input);
  if (!d) return null;
  const { locale = "en-US", ...rest } = opts || {};
  const defaultOpts: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "2-digit", hour12: true };
  return new Intl.DateTimeFormat(locale, { ...defaultOpts, ...rest }).format(d);
};

export default {
  toDate,
  isValidDate,
  getDateOnly,
  formatDate,
  formatTime,
};
