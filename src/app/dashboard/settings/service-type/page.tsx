import { ServicesTypeTable } from "@/app/dashboard/components/settings/services-type/table";

export const Page = async ({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) => {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    return (
        <div>
            <ServicesTypeTable
                query={query}
                currentPage={currentPage}
            />
        </div>
    )
};

export default Page;