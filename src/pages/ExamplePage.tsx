import { Header } from '../components/Header';
import { Card } from '../components/Card';

export const ExamplePage = () => (
  <div className="min-h-screen bg-gray-50">
    <Header title="Example Page" />
    <main className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Feature 1" description="This is the first feature card" />
        <Card title="Feature 2" description="This is the second feature card" />
        <Card title="Feature 3" description="This is the third feature card" />
      </div>
    </main>
  </div>
);
