import { Topic } from './App';
import { TopicCard } from './TopicCard';
import { useState } from 'react';
import './TopicCard.css';

type TopicsProps = {
  topics: Topic[];
};
export function Accordion({ topics }: TopicsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  function handleDoubleClick() {
    setActiveIndex(-1);
  }

  return (
    <div>
      {topics.map((topic, index) => (
        <div>
          <TopicCard
            key={topic.id}
            title={topic.title}
            onDoubleClick={handleDoubleClick}
            isActive={activeIndex === index}
            onShow={() => setActiveIndex(index)}
            content={topic.content}></TopicCard>
        </div>
      ))}
    </div>
  );
}
