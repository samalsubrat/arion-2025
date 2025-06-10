import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Arion Frost",
    description: "Ultimate keyboard upgraded (special edition Keychron K8 Pro)",
    price: "₹10,495.00",
    originalPrice: "₹12,000.00",
    image: "http://139.59.17.142/static/media/image5.001e26b41b1775b4b323.png",
    tags: ["NEW", "Wireless", "Hot-swap"],
    category: "Keyboard",
  },
  {
    id: 2,
    name: "Arion Deskmat",
    description: "Ultimate keyboard upgraded (special edition Keychron K8 Pro)",
    price: "₹1,500.00",
    originalPrice: "₹2,000.00",
    image: "http://139.59.17.142/static/media/image6.6be82456ff3eb5cebf40.png",
    tags: ["900 x 400 x3 (mm)"],
    category: "Accessory",
  },
  {
    id: 3,
    name: "Arion Coiled Cables",
    description: "Ultimate keyboard upgraded (special edition Keychron K8 Pro)",
    price: "₹1,600.00",
    originalPrice: "₹2,000.00",
    image: "http://139.59.17.142/static/media/image7.aae338d68f1823949056.png",
    tags: ["Paracord/Aviator Twist"],
    category: "Cable",
  },
  {
    id: 4,
    name: "Arion Frost Barebone",
    description: "Ultimate keyboard upgraded (special edition Keychron K8 Pro)",
    price: "₹1,600.00",
    originalPrice: "₹2,000.00",
    image: "http://139.59.17.142/static/media/image8.1afe45d7082f891f7fb8.png",
    tags: ["Wireless", "Hot-swap"],
    category: "Keyboard",
  },
  {
    id: 5,
    name: "90 Degree L",
    description: "Arion USB 3.0 GBPS data transfer cable",
    price: "₹350.00",
    originalPrice: "₹500.00",
    image: "http://139.59.17.142/static/media/image9.4ad9973428e89a11a815.png",
    tags: ["Aluminum"],
    category: "Cable",
  },
]

export default function ProductCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 text-start">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Popular products</h2>
      </div>

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <div className="absolute -top-16 right-0 flex gap-2 z-10">
          <CarouselPrevious className="static translate-y-0 text-white bg-gray-900 hover:bg-gray-800 border-gray-300 disabled:bg-white disabled:text-gray-800 disabled:border-gray-200" />
          <CarouselNext className="static translate-y-0 text-white bg-gray-900 hover:bg-gray-800 border-gray-300 disabled:bg-white disabled:text-gray-800 disabled:border-gray-200" />
          </div>
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 md:pr-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-[calc(100%/3.5)]">
                <Card className="h-full flex flex-col">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      {product.tags.includes("NEW") && (
                        <Badge className="absolute top-2 left-2 bg-gradient-to-r from-orange-400 to-red-500 text-white border-0">
                          NEW
                        </Badge>
                      )}
                    </div>

                    <div className="py-4 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <h3 className="font-bold text-lg text-black mb-1">{product.name}</h3>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {product.tags
                            .filter((tag) => tag !== "NEW")
                            .map((tag, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs bg-gray-200 text-black hover:bg-gray-300"
                              >
                                {tag}
                              </Badge>
                            ))}
                        </div>
                        <p className="text-sm text-gray-700 line-clamp-2 mb-4">{product.description}</p>
                      </div>

                      <div className="mt-auto space-y-3">
                        <div>
                          <span className="font-bold text-lg text-black">
                            {product.price} (incl. GST)
                          </span>
                          <div className="text-sm text-gray-500 line-through font-medium">{product.originalPrice}</div>
                        </div>

                        <Button className="px-6 bg-black hover:bg-gray-800 text-white group text-md" size="sm">
                          Buy Now <ArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"/>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
