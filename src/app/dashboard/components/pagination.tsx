'use client'

import { generatePagination } from "@/lib/utils"
import { usePathname, useSearchParams } from "next/navigation"
import clsx from "clsx"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

  
  export const PaginationDemo = (
    { totalPages }: { totalPages: number }
  ) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;
    const allPages = generatePagination(currentPage, totalPages)

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`
    }

    return (
      <Pagination>
        <PaginationContent>
            <PaginationArrow
            href={createPageURL(currentPage - 1)}
            direction='previous'
            isDisabled={currentPage <= 1}
            />
            { allPages.map((page, index) => {
                let position: 'first' | 'last' | 'single' | 'middle' | undefined
                
                if (index === 0) position = 'first'
                if (index === allPages.length - 1) position = 'last'
                if (allPages.length === 1) position = 'single'
                if (page === '...') position = 'middle'

                return (
                        <PaginationNumber
                        key={page}
                        href={createPageURL(page)}
                        page={page}
                        position={position}
                        isActive={currentPage === page}
                        />
                )
            })}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationArrow
          href={createPageURL(currentPage + 1)}
          direction='next'
          isDisabled={currentPage >= totalPages}
          />
        </PaginationContent>
      </Pagination>
    )
  }

  const PaginationNumber = ({
    page,
    href,
    isActive,
    position
  }: {
    page: number | string;
    href: string;
    position?: 'first' | 'last' | 'middle' | 'single'
    isActive: boolean;
  }) => {
    return isActive || position === 'middle' ? (
        <PaginationItem>
            <PaginationLink href={href} isActive>
                {page}
            </PaginationLink>
        </PaginationItem>
    ) : (
        <PaginationItem>
            <PaginationLink href={href}>
                {page}
            </PaginationLink>
        </PaginationItem>
    )
  }
  
const PaginationArrow = ({
    href,
    direction,
    isDisabled,
} : {
    href: string;
    direction: 'next' | 'previous';
    isDisabled?: boolean;
}) => {
    const arrow = direction === 'next' ? (
        <PaginationNext
            href={href}
        />
    ) : (
        <PaginationPrevious
            href={href}
            />
    )
    return isDisabled ? (
        <PaginationItem>
            {arrow}    
        </PaginationItem>
    ) : (
        <PaginationItem>
            {arrow}    
        </PaginationItem>
    )
}