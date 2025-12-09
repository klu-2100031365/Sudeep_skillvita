# Cards Stack Component

An animated sticky card component built with Motion (Framer Motion) for creating engaging scroll-based experiences.

## Installation

The component is already installed in this project. Dependencies:
- ✅ `motion` (v12.11.0) - Already installed
- ✅ `lucide-react` - Already installed for icons
- ✅ TypeScript - Already configured
- ✅ Tailwind CSS - Already configured

## Files

- **Component**: `/src/components/ui/cards-stack.tsx`
- **Demo Examples**: `/src/components/ui/cards-stack-demo.tsx`
- **Live Implementation**: `/src/app/student-placements/(components)/SkillingJourney.tsx`

## Components

### ContainerScroll
A wrapper component that provides perspective for 3D card stacking effects.

```tsx
<ContainerScroll className="min-h-[400vh] space-y-8 py-12">
  {/* CardSticky components go here */}
</ContainerScroll>
```

**Props:**
- Extends all standard `HTMLDivElement` props
- `className`: Optional custom classes
- `style`: Optional inline styles

### CardSticky
Individual card that sticks during scroll with customizable spacing and depth.

```tsx
<CardSticky
  index={0}
  incrementY={10}
  incrementZ={10}
  className="rounded-2xl p-8"
>
  {/* Card content */}
</CardSticky>
```

**Props:**
- `index`: Number - Card position in the stack (required)
- `incrementY`: Number - Vertical spacing between cards (default: 10)
- `incrementZ`: Number - Depth spacing for 3D effect (default: 10)
- Extends all Motion `div` props

## Usage Examples

### 1. Process/Journey Section (Current Implementation)
Perfect for step-by-step processes with a sticky header on the left.

```tsx
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"

const steps = [
  { number: "1", title: "Step One", description: "Description..." },
  // ... more steps
]

export default function Journey() {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Sticky Header */}
      <div className="sticky top-0 h-svh py-12">
        <h2>Your Journey Title</h2>
        <p>Description text</p>
      </div>

      {/* Scrolling Cards */}
      <ContainerScroll className="min-h-[400vh] space-y-8 py-12">
        {steps.map((step, index) => (
          <CardSticky
            key={step.number}
            index={index + 2}
            className="rounded-2xl border bg-card p-8"
          >
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </CardSticky>
        ))}
      </ContainerScroll>
    </div>
  )
}
```

### 2. Portfolio/Work Showcase
Stack cards with images and project details.

```tsx
<ContainerScroll className="min-h-[500vh] py-12">
  {projects.map((project, index) => (
    <CardSticky
      key={project.id}
      index={index}
      incrementY={60}
      incrementZ={5}
      className="rounded-lg overflow-hidden"
    >
      <div className="p-6">
        <h2>{project.title}</h2>
      </div>
      <img src={project.image} alt={project.title} />
    </CardSticky>
  ))}
</ContainerScroll>
```

### 3. Achievements/Metrics
Centered cards with rotation effect.

```tsx
<ContainerScroll className="min-h-[400vh] place-items-center p-12">
  {metrics.map((metric, index) => (
    <CardSticky
      key={metric.id}
      index={index + 2}
      incrementY={20}
      className="h-72 w-96 rounded-2xl p-8"
      style={{ rotate: index + 2, background: metric.color }}
    >
      <h1>{metric.value}</h1>
      <h3>{metric.label}</h3>
    </CardSticky>
  ))}
</ContainerScroll>
```

## Styling Tips

### Container Height
The container needs sufficient height for the scroll effect:
- Use `min-h-[400vh]` for 5 cards
- Use `min-h-[500vh]` for larger card increments
- Adjust based on number of cards and spacing

### Card Spacing
Control the stacking effect with `incrementY` and `incrementZ`:
- **Default (10, 10)**: Subtle, tight stacking
- **Wide (60, 5)**: Larger vertical gaps, less depth
- **Deep (10, 20)**: Tight vertical, pronounced 3D depth

### Responsive Design
```tsx
<CardSticky
  index={index}
  className="p-4 md:p-8 text-sm md:text-base"
>
  {/* Mobile-first responsive content */}
</CardSticky>
```

### Dark Mode Support
Uses Tailwind's built-in dark mode:
```tsx
className="bg-white dark:bg-slate-900 text-black dark:text-white"
```

## Best Practices

1. **Always provide unique keys** when mapping over arrays
2. **Start index at 0 or higher** - lower indexes stick longer
3. **Match container height to content** - more cards = taller container
4. **Use backdrop-blur** for glassmorphism effects
5. **Add hover effects** for better interactivity

## Demo Page

See `/src/components/ui/cards-stack-demo.tsx` for three complete examples:
- **Process**: Two-column layout with sticky header
- **Work**: Portfolio showcase with images
- **Achievements**: Centered metrics with rotation

## Live Example

Visit `/student-placements` page to see the component in action in the "How It Works" section.

## Animation Details

The component uses Motion's layout animations for smooth position transitions:
- Cards stick at their calculated `top` position
- `backfaceVisibility: hidden` prevents flickering
- 3D perspective is applied via the container
- Smooth scroll-based animations

## Troubleshooting

**Cards not stacking:**
- Ensure parent has sufficient height (`min-h-[400vh]`)
- Check that `index` prop is unique and sequential

**Performance issues:**
- Reduce number of simultaneous animations
- Use `will-change` CSS sparingly
- Optimize images if using in cards

**Layout breaks on mobile:**
- Test responsive classes
- Adjust `incrementY` for mobile with conditional props
- Consider reducing card height on smaller screens
