"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

type TimelineEvent = {
  id: string
  period: string
  title: string
  content: string
  category: "indigenous" | "treaty" | "legislation" | "park" | "policy"
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "pre-1850",
    period: "Pre-1850s",
    title: "Indigenous Nations Stewardship",
    content:
      "Indigenous Nations—including Ute, Arapaho, Cheyenne, Shoshone, Bannock, Crow, Blackfeet, Salish, Kootenai, Nez Perce, and many others—stewarded the Rockies for millennia, relying on seasonal hunting, fishing, plant gathering, and inter-tribal trade networks. Archaeological and oral histories in the Yellowstone region date human presence back to at least 12,000 years ago.",
    category: "indigenous",
  },
  {
    id: "1851-1868",
    period: "1851 & 1868",
    title: "Fort Laramie Treaties",
    content:
      "1851 Treaty (Horse Creek): Negotiated September 17, 1851, between the U.S. Indian Peace Commission and Plains tribes, it recognized broad territorial boundaries but was undermined by late or missing annuities.\n\n1868 Treaty: Signed April 29, 1868, it confined many tribes to the Great Sioux Reservation while reserving off-reservation \"hunting rights\" that were soon ignored—setting the stage for conflicts such as Red Cloud's War and Chief Joseph's 1877 flight through Yellowstone.",
    category: "treaty",
  },
  {
    id: "1862",
    period: "1862",
    title: "Homestead Act",
    content:
      "Federal law granting 160 acre plots to settlers after five years of residence, accelerating Euro-American migration into Indigenous lands across the West, including future park regions.",
    category: "legislation",
  },
  {
    id: "1871",
    period: "1871",
    title: "End of Formal Treaty-Making",
    content:
      'An 1871 rider on the Indian Appropriations Act ended new treaties with tribes, shifting policy from sovereign-to-sovereign diplomacy to "wardship" under Congress—though existing treaties remained in force.',
    category: "policy",
  },
  {
    id: "1872",
    period: "1872",
    title: "Yellowstone National Park Established",
    content:
      'On March 1, 1872, Congress set aside 2 million + acres as a "public pleasuring-ground" without tribal consultation. Regulations quickly criminalized traditional hunting, fishing, and gathering by Shoshone, Bannock, Crow, Nez Perce, and others—prompting episodes like the 1877 Nez Perce flight under Chief Joseph.',
    category: "park",
  },
  {
    id: "1870s-1880s",
    period: "Late 1870s–1880s",
    title: "Forced Removals in Colorado",
    content:
      "After the 1858 Pike's Peak Gold Rush, broken treaties (1851 & 1861 Fort Laramie/Fort Wise) and surging mining camps confined Arapaho and Cheyenne to Wyoming/Oklahoma reservations by 1878. By the 1880s, Ute bands were expelled into southwestern Colorado and Utah. When Rocky Mountain National Park was created in 1915, these displacements were effectively codified.",
    category: "policy",
  },
  {
    id: "1887",
    period: "1887",
    title: "Dawes Act",
    content:
      "The General Allotment Act parceled tribal reservations into individual plots and declared &quot;surplus&quot; lands open to non-Native purchase. Between 1887 and 1934, tribes lost about 90 million acres of reservation land nationwide.",
    category: "legislation",
  },
  {
    id: "1891",
    period: "1891",
    title: "Forest Reserve Act",
    content:
      'Authorized the President to set aside "forest reserves" (later National Forests) from the public domain—by 1907 over 150 million acres were reserved, often barring Indigenous access before park designations.',
    category: "legislation",
  },
  {
    id: "1896",
    period: "1896",
    title: "Blackfeet Land Cession",
    content:
      "Under the Act of June 11, 1896, the Blackfeet Nation ceded roughly 16.6 million acres of its reservation—the eastern two-thirds—which later formed the eastern boundary of Glacier National Park (established 1910). Disputes over retained hunting rights under that cession fueled litigation well into the 20th century.",
    category: "treaty",
  },
  {
    id: "1906",
    period: "1906",
    title: "Antiquities Act & Mesa Verde National Park",
    content:
      'Antiquities Act (March 2, 1906): Empowered presidents to protect "historic landmarks, structures, and objects of scientific interest" on federal lands.\n\nMesa Verde NP (June 29, 1906): The first park designated under that Act, preserving Ancestral Pueblo cliff dwellings in southwest Colorado. Early management excluded Pueblo descendants from ceremonial use and interpretation.',
    category: "park",
  },
  {
    id: "1910-1916",
    period: "1910–1916",
    title: "Glacier NP, Rocky Mountain NP & NPS",
    content:
      "Glacier NP (May 11, 1910): Created from Forest Reserve lands plus 1896 Blackfeet cession, closing ancestral trails and springs to Salish, Kootenai, and Blackfeet peoples.\n\nRocky Mountain NP (January 26, 1915): Formalized the exclusion of Ute and Arapaho from their mountain summer/winter grounds around Estes Park.\n\nNational Park Service (August 25, 1916): Organic Act centralized park management under DOI, prioritizing &quot;use and enjoyment&quot; by the public over Indigenous rights and stewardship.",
    category: "park",
  },
  {
    id: "mid-20th-present",
    period: "Mid-20th Century–Present",
    title: "Gradual Policy Shifts",
    content:
      "A gradual shift—driven by tribal activism, landmark legal wins (e.g., United States v. Winans, 1905), and evolving policy—has produced:\n\n1998 NPS Tribal Consultation Policy, mandating government-to-government dialogue (implementation remains uneven).\n\nCo-management & Cultural-Use Agreements in parks like Yellowstone, Mesa Verde, and Rocky Mountain for limited subsistence and ceremonial access.\n\nNative American Tourism and Improving Visitor Experience (NATIVE) Act (2016) directing federal agencies to partner with tribes on tourism, heritage, and economic development.",
    category: "policy",
  },
]

const categoryColors = {
  indigenous: "bg-amber-500",
  treaty: "bg-sky-500",
  legislation: "bg-emerald-500",
  park: "bg-purple-500",
  policy: "bg-rose-500",
}

const categoryLabels = {
  indigenous: "Indigenous History",
  treaty: "Treaty",
  legislation: "Legislation",
  park: "Park Establishment",
  policy: "Policy",
}

export function HistoricalTimeline() {
  const [expandedEvents, setExpandedEvents] = useState<string[]>([])

  const toggleEvent = (id: string) => {
    setExpandedEvents((prev) => (prev.includes(id) ? prev.filter((eventId) => eventId !== id) : [...prev, id]))
  }

  const isExpanded = (id: string) => expandedEvents.includes(id)

  return (
    <div className="relative container max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Indigenous History & National Parks Timeline</h2>

      {/* Legend */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {Object.entries(categoryLabels).map(([key, label]) => (
          <div key={key} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${categoryColors[key as keyof typeof categoryColors]}`}></div>
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-black transform md:-translate-x-px"></div>

        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-7 h-7 rounded-full bg-background border-4 border-muted-foreground transform -translate-x-3 md:-translate-x-3.5 flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full ${categoryColors[event.category]}`}></div>
              </div>

              {/* Content */}
              <div
                className={cn(
                  "w-full md:w-[calc(50%-2rem)] ml-10 md:ml-0 md:px-6",
                  index % 2 === 0 ? "md:text-left" : "md:text-right",
                )}
              >
                <div
                  className={cn(
                    "bg-card border rounded-lg shadow-sm p-6 transition-all duration-300",
                    isExpanded(event.id) ? "shadow-md" : "",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-2 bg-muted">
                        {event.period}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    </div>
                    <button
                      onClick={() => toggleEvent(event.id)}
                      className="flex-shrink-0 p-1 rounded-full hover:bg-muted transition-colors"
                      aria-label={isExpanded(event.id) ? "Collapse" : "Expand"}
                    >
                      {isExpanded(event.id) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>
                  </div>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isExpanded(event.id) ? "max-h-[1000px] opacity-100" : "max-h-24 opacity-90",
                    )}
                  >
                    <p className="text-muted-foreground whitespace-pre-line">{event.content}</p>
                  </div>

                  {!isExpanded(event.id) && (
                    <button
                      onClick={() => toggleEvent(event.id)}
                      className="mt-2 text-sm font-medium text-primary hover:underline"
                    >
                      Read more
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
