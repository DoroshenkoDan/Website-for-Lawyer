/** Payload submitted by the contact / call-back form. */
export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  /** Locale the visitor used, useful for the attorney's reply. */
  locale?: string;
}
