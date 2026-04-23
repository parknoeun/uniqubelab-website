import Icon from './Icon';

const variants = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6'];
const icons = ['graduation', 'book', 'shield', 'package', 'users', 'layers'];
const tags = ['LMS', 'Public', 'Transit', 'Portal', 'Training', 'Finance'];

export default function ProjectVis({ index }: { index: number }) {
  const v = variants[index % 6];
  return (
    <div className={`pcard-vis ${v}`}>
      <div className="pcard-vis-tag">{tags[index % tags.length]}</div>
      <div className="pcard-vis-overlay"><Icon name={icons[index % icons.length]} size={120} stroke={1}/></div>
    </div>
  );
}