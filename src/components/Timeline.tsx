export default function ResponsiveHorizontalTimeline() {
    const timelineEvents = [
      {
        date: "8,000 BC",
        description: "Native Americans settled in what is now Estes Park",
      },
      {
        date: "1820",
        description: "Stephen A. Long expedition study, Longs Peak",
      },
      {
        date: "1858",
        description: "Joel Estes starts a ranch in what is now Estes Park",
      },
      {
        date: "Early 1900's",
        description: "Mining became popular in the Rockies",
      },
      {
        date: "1905",
        description: '"The Shining" Stanley Hotel constructed',
      },
      {
        date: "1915",
        description: "Rocky Mountain National Park established",
      },
    ]
  
    return (
      <div className="w-full max-w-6xl mx-auto p-6 bg-background text-primary overflow-x-auto">
        {/* Mobile timeline (vertical) */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-3 w-1 bg-black"></div>
  
            {timelineEvents.map((event, index) => (
              <div key={index} className="mb-8 relative">
                {/* Timeline dot */}
                <div className="absolute left-[-26px] top-[6px] w-4 h-4 rounded-full bg-teal-400"></div>
  
                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-black">{event.date}</h3>
                  <p className="text-sm text-black">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Desktop timeline (horizontal) */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute h-1 bg-black top-1 left-0 right-0 w-full"></div>
  
            {/* Timeline events */}
            <div className="flex justify-between relative">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex flex-col items-center w-40 ${index % 2 === 0 ? "pt-0" : "pt-0"}`}>
                  {/* Timeline dot */}
                  <div className="w-4 h-4 rounded-full bg-teal-400 mb-2"></div>
  
                  {/* Date */}
                  <h3 className="text-lg font-bold text-black mb-1 text-center">{event.date}</h3>
  
                  {/* Description */}
                  <p className="text-sm text-center text-black">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  