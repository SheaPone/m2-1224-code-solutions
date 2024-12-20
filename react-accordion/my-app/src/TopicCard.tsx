type TopicCardProps = {
  title: string;
  content: string;
  isActive: boolean;
  onShow: () => void;
  onDoubleClick: () => void;
};

export function TopicCard({
  title,
  content,
  isActive,
  onShow,
  onDoubleClick,
}: TopicCardProps) {
  return (
    <section className="card" onClick={onShow} onDoubleClick={onDoubleClick}>
      <h2>{title}</h2>
      {isActive && (
        <div className="p-tag">
          <p>{content}</p>
        </div>
      )}
    </section>
  );
}
