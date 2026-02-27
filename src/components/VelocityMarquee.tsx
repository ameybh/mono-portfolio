"use client"

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/ScrollVelocity"

const items = [
  'Python','FastAPI','Django','React','Next.js','PyTorch',
  'PydanticAI','LangChain','Celery','RabbitMQ','Docker',
  'GCP','AWS Lambda','InsightFace','Remotion'
]

export function VelocityMarquee() {
  return (
    <div className="relative w-full overflow-hidden bg-elevated py-3.5 border-y border-elevated-border">
      <ScrollVelocityContainer className="font-mono text-xs text-elevated-muted tracking-widest uppercase">
        <ScrollVelocityRow baseVelocity={5} direction={1}>
          <div className="flex items-center gap-12">
            {items.map((item, i) => (
              <span key={i} className="flex items-center gap-12">
                {item}
                <span className="w-1 h-1 rounded-full bg-elevated-muted/50"></span>
              </span>
            ))}
          </div>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  )
}
