import { useState, useCallback } from 'react'
import { getAllProducts } from '../services/getProducts'
import { Product } from '../types/ProductType'
import { IErrorMessages } from '../types/ErrorType'


export function useProduct() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<IErrorMessages | null>(null)

    const getProducts = useCallback(async () => {
        console.log("entre a useCallback")
        try {
            setLoading(true)
            setError(null)
            const newProducts = await getAllProducts()
            setProducts(newProducts.data)
        } catch (e: any) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }, [])


    return { getProducts, loading, error, products }
}