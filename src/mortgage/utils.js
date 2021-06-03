const emailSubject = "Mortgage Simulator enquiry"
const emailBody = `Hello Martin!%0a%0a[Please enter your question/comment/suggestion/bug details here]%0a%0aRegards,%0a[Your name]`
export const emailMailto = `mailto:mortgagesim@gmail.com?subject=${emailSubject}&body=${emailBody}`

const locale = "en-US"
export const formatCurrency = Intl.NumberFormat(locale, { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format
export const formatDate = Intl.DateTimeFormat(locale).format