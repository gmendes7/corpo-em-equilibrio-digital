
import { useState } from 'react';
import { Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'Como a genética pode influenciar seu emagrecimento',
    excerpt: 'Descubra como seu DNA afeta sua capacidade de perder peso e como personalizar sua abordagem para resultados melhores.',
    image: '/blog1.jpg',
    category: 'Emagrecimento',
    date: '10 de maio, 2023',
  },
  {
    id: 2,
    title: 'Gerenciando a diabetes naturalmente: abordagem integrativa',
    excerpt: 'Estratégias naturais comprovadas cientificamente para ajudar no controle da glicemia e melhorar a qualidade de vida.',
    image: '/blog2.jpg',
    category: 'Diabetes',
    date: '23 de abril, 2023',
  },
  {
    id: 3,
    title: 'Menopausa e equilíbrio hormonal: o que você precisa saber',
    excerpt: 'Um guia completo sobre as mudanças hormonais na menopausa e como lidar com os sintomas de forma natural.',
    image: '/blog3.jpg',
    category: 'Menopausa',
    date: '5 de abril, 2023',
  }
];

const categories = ['Todos', 'Diabetes', 'Emagrecimento', 'Menopausa', 'Genética'];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const navigate = useNavigate();

  // Filtra os posts com base na categoria selecionada
  const filteredPosts = activeCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16 relative overflow-hidden">
        {/* Elementos decorativos de plantas */}
        <div className="absolute top-0 right-0 w-40 h-40 opacity-20 leaf-animation">
          <img src="/leaf1.png" alt="" className="w-full" />
        </div>
        
        <div className="absolute bottom-20 left-0 w-32 h-32 opacity-20 leaf-animation" style={{ animationDelay: '1.5s' }}>
          <img src="/leaf2.png" alt="" className="w-full" />
        </div>
        
        <div className="container-custom px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Blog <span className="text-brand-green">Saúde</span> & Bem-estar
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Artigos informativos e baseados em ciência para ajudar você a entender melhor sua saúde e as opções de tratamento disponíveis.
            </p>
          </div>

          {/* Categories filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  category === activeCategory
                    ? 'bg-brand-green text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-brand-green-light'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog posts - Grid mais amplo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium bg-brand-green-light text-brand-green px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <button onClick={() => navigate(`/blog/${post.id}`)} className="text-brand-green hover:text-brand-green-dark font-medium flex items-center transition-colors">
                    Leia mais
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-600 text-lg">Nenhum artigo encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
