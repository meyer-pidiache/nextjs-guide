import Navigation from './ui/navigation';

export default function Header({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <Navigation />
    </div>
  );
}
