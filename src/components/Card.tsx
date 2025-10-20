export const Card = ({ title, description }: { title: string; description: string }) => (
  <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
