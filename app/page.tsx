import { CarCardList, Hero, SearchBar } from "@/components";
import ShowMore from "@/components/show-more";
import { SearchParamsTypes } from "@/types";
import { fetchCars } from "@/utils";

type HomePageProps = {
  searchParams: SearchParamsTypes
}

export default async function Home({ searchParams }: HomePageProps) {
  const cars: any = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    limit: searchParams.limit || 10,
    year: searchParams.year || "2023"
  });

  return (
    <section className="home-container">
      <Hero />

      <div className="catalogue mb-48">
        <h3 className="text-3xl font-bold leading-normal">Car Catalogue</h3>
        <p className="text-lg font-extralight mb-8">Explore the cars you might like</p>

        <div className="flex flex-col xl:flex-row mb-8">
          <div className="search-bar mr-16">
            <SearchBar />
          </div>
        </div>

        <div className="mb-24">
          <CarCardList cars={cars} />
        </div>


        <ShowMore
          pageNumber={(searchParams.limit || 10) / 10}
          isNext={(searchParams.limit || 10) > cars.length}
        />

      </div>
    </section>
  )
}
