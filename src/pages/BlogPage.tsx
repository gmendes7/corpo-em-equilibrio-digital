import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const blogPosts = [
  {
    id: 1,
    title: "Como a genética pode influenciar seu emagrecimento",
    excerpt:
      "Descubra como seu DNA afeta sua capacidade de perder peso e como personalizar sua abordagem para resultados melhores.",
    image: "/blog1.jpg",
    category: "Emagrecimento",
    date: "10 de maio, 2023",
  },
  {
    id: 2,
    title: "Gerenciando a diabetes naturalmente: abordagem integrativa",
    excerpt:
      "Estratégias naturais comprovadas cientificamente para ajudar no controle da glicemia e melhorar a qualidade de vida.",
    image: "/blog2.jpg",
    category: "Diabetes",
    date: "23 de abril, 2023",
  },
  {
    id: 3,
    title: "Menopausa e equilíbrio hormonal: o que você precisa saber",
    excerpt:
      "Um guia completo sobre as mudanças hormonais na menopausa e como lidar com os sintomas de forma natural.",
    image: "/blog3.jpg",
    category: "Menopausa",
    date: "5 de abril, 2023",
  },
];

const categories = [
  "Todos",
  "Diabetes",
  "Emagrecimento",
  "Menopausa",
  "Genética",
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const loadBlogData = async () => {
      setIsLoading(true);

      try {
        // Here we simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 500));
        // If this was a real API call, we'd handle the data here
      } catch (error) {
        console.error("Erro ao carregar os artigos do blog:", error);
        toast({
          title: "Erro ao carregar artigos",
          description:
            "Não foi possível carregar os artigos. Por favor, tente novamente mais tarde.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogData();
  }, [activeCategory, toast]);

  // Filtra os posts com base na categoria selecionada
  const filteredPosts =
    activeCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const handlePostClick = (id: number) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="min-h-screen bg-branco-areia">
      <Navbar />
      <div className="pt-24 pb-16 relative overflow-hidden">
        {/* Elementos decorativos de plantas */}
        <div className="absolute top-0 right-0 w-40 h-40 opacity-20 leaf-animation">
          <img src="/leaf1.png" alt="" className="w-full" />
        </div>

        <div
          className="absolute bottom-20 left-0 w-32 h-32 opacity-20 leaf-animation"
          style={{ animationDelay: "1.5s" }}
        >
          <img src="/leaf2.png" alt="" className="w-full" />
        </div>

        <div className="container-custom px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Blog <span className="text-verde-musgo">Saúde</span> & Bem-estar
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Artigos informativos e baseados em ciência para ajudar você a
              entender melhor sua saúde e as opções de tratamento disponíveis.
            </p>
          </div>

          {/* Categories filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  category === activeCategory
                    ? "bg-verde-musgo text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-verde-claro"
                }`}
                onClick={() => setActiveCategory(category)}
                aria-label={`Filtrar por ${category}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog posts */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow animate-pulse"
                >
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2 w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4 w-4/6"></div>
                    <div className="h-6 w-24 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handlePostClick(post.id)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium bg-verde-claro text-verde-musgo px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePostClick(post.id);
                      }}
                      className="text-verde-musgo hover:text-verde-musgo/80 font-medium flex items-center transition-colors"
                    >
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
          )}

          {!isLoading && filteredPosts.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-600 text-lg">
                Nenhum artigo encontrado nesta categoria.
              </p>
              <button
                onClick={() => setActiveCategory("Todos")}
                className="mt-4 text-verde-musgo hover:text-verde-musgo/80 font-medium"
              >
                Mostrar todos os artigos
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogPage;
