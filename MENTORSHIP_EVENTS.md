# Mentorship Events Feature

## Overview
This document describes the implementation of the Mentorship Events feature for the Skillvita platform.

## Features Implemented

### 1. Events Data Structure
Created a comprehensive data file at `src/data/mentorship-events.ts` containing:
- 10 unique events with detailed information
- Event metadata (title, date, description, images)
- Event-specific statistics (mentors, participants, support hours, satisfaction rate)
- Winners, runners-up, top performers, and organizers for each event
- Testimonials from participants

### 2. Events Listing Page
Updated `src/components/mentorship/events-section.tsx`:
- Displays all 10 events in a responsive grid layout
- Each event card shows title, date, description, and image
- Click-through functionality to individual event pages
- Hover effects for better UX

### 3. Dynamic Event Pages
Enhanced `src/app/mentorship/events/[slug]/page.tsx`:
- Dynamic routing based on event slug
- Hero section with event-specific images and descriptions
- Stats section showing event impact metrics
- Testimonials section with participant feedback
- Performers section with tabs for winners, runners-up, top performers, and organizers
- Responsive design for all screen sizes
- Dark mode support

## Events List

1. **MLRIT x Skillvita** (`mlrit-x-skillvita`)
   - Collaborative tech workshop with MLRIT
   - March 15, 2024

2. **Designathon** (`designathon`)
   - 12-hour design sprint
   - April 27, 2025

3. **SNIST x Coursevita** (`snist-coursevita`)
   - Technical workshop at SNIST
   - February 20, 2024

4. **KLU x Coursevita** (`klu-x-coursevita`)
   - Innovation workshop at KL University
   - January 10, 2024

5. **Vibecoding 1.0** (`vibecoding-1-0`)
   - First community coding event
   - June 5, 2023

6. **Vibecoding 2.0** (`vibecoding-2-0`)
   - Enhanced second edition
   - November 12, 2023

7. **Cracking the Fintech** (`cracking-the-fintech`)
   - Fintech innovation workshop
   - September 8, 2023

8. **Let's Get Hired 1.0** (`lets-get-hired-1-0`)
   - Career preparation workshop
   - March 25, 2023

9. **Let's Get Hired 2.0** (`lets-get-hired-2-0`)
   - Advanced career development
   - July 15, 2023

10. **Let's Get Hired 3.0** (`lets-get-hired-3-0`)
    - Comprehensive placement drive
    - December 10, 2023

## Technical Details

### Data Structure
```typescript
interface MentorshipEvent {
  id: string;
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  heroImage: string;
  about: string;
  stats: {
    mentors: string;
    participants: string;
    support: string;
    satisfaction: string;
  };
  winners: Performer[];
  runners: Performer[];
  topPerformers: Performer[];
  organizers: Performer[];
  testimonials: Testimonial[];
}
```

### Key Components
- **EventsSection**: Displays event cards in grid layout
- **Dynamic Event Page**: Shows detailed event information with stats, testimonials, and performers
- **Conditional Rendering**: Only shows sections with available data

### Routing
- List page: `/mentorship#events`
- Individual event: `/mentorship/events/[slug]`

## Customization

### Adding New Events
1. Add event data to `mentorshipEvents` array in `src/data/mentorship-events.ts`
2. Include all required fields (id, slug, title, date, etc.)
3. Add event image to `public/images/events/`
4. The event will automatically appear in the listing and be accessible via its slug

### Updating Event Content
- Edit the specific event object in `src/data/mentorship-events.ts`
- Changes will reflect immediately in both listing and detail pages
- Event-specific stats, performers, and testimonials can be customized per event

## Design Features
- Responsive grid layout (1 column mobile, 2 tablet, 3 desktop)
- Dark mode support throughout
- Hover effects on event cards
- Smooth navigation transitions
- Conditional sections based on data availability
- Professional styling with brand colors

## Future Enhancements
- Add event registration functionality
- Implement event search and filtering
- Add event categories/tags
- Include calendar integration
- Add social sharing capabilities
