import { useCallback, useState } from "react";

export default function useDropdownManager({ initialActiveId = null } : { initialActiveId?: number | null }) {
    const [activeId, setActiveId] = useState<number | null>(initialActiveId);

    const openDropdown = useCallback((id: number) => setActiveId(id), [])

    const closeDropdown = useCallback(() => setActiveId(null), [])

    const toggleDropdown = useCallback((id: number) =>
        setActiveId(prev => prev === id ? null : id), [])

    const isActive = useCallback((id: number) => activeId === id, [activeId])

    return {
        activeId,
        openDropdown,
        closeDropdown,
        toggleDropdown,
        isActive
    }
}