import { z } from "zod"

export const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  address: z.string().min(10, "Please enter your full address"),
  city: z.string().min(2, "Please enter your city"),
  province: z.string().min(1, "Please select your province"),
  postalCode: z.string().optional(),
  notes: z.string().optional(),
})

export type CheckoutFormData = z.infer<typeof checkoutSchema>

export const cambodianProvinces = [
  { value: "banteay-meanchey", label: "Banteay Meanchey" },
  { value: "battambang", label: "Battambang" },
  { value: "kampong-cham", label: "Kampong Cham" },
  { value: "kampong-chhnang", label: "Kampong Chhnang" },
  { value: "kampong-speu", label: "Kampong Speu" },
  { value: "kampong-thom", label: "Kampong Thom" },
  { value: "kampot", label: "Kampot" },
  { value: "kandal", label: "Kandal" },
  { value: "kep", label: "Kep" },
  { value: "koh-kong", label: "Koh Kong" },
  { value: "kratie", label: "Kratie" },
  { value: "mondulkiri", label: "Mondulkiri" },
  { value: "oddar-meanchey", label: "Oddar Meanchey" },
  { value: "pailin", label: "Pailin" },
  { value: "phnom-penh", label: "Phnom Penh" },
  { value: "preah-sihanouk", label: "Preah Sihanouk" },
  { value: "preah-vihear", label: "Preah Vihear" },
  { value: "prey-veng", label: "Prey Veng" },
  { value: "pursat", label: "Pursat" },
  { value: "ratanakiri", label: "Ratanakiri" },
  { value: "siem-reap", label: "Siem Reap" },
  { value: "stung-treng", label: "Stung Treng" },
  { value: "svay-rieng", label: "Svay Rieng" },
  { value: "takeo", label: "Takeo" },
  { value: "tbong-khmum", label: "Tbong Khmum" },
]