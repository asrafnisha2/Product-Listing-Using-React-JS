function FilterSort({
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder
}) {

  const handleReset = () => {
    setSelectedCategory("all");
    setSortOrder("default");
  };

  return (
    <div>
      <select
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(e.target.value)
        }
      >
        <option value="all">All</option>
        <option value="Electronics">
          Electronics
        </option>
        <option value="Fashion">
          Fashion
        </option>
        <option value="Books">
          Books
        </option>
        <option value="Stationery">
          Stationery
        </option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) =>
          setSortOrder(e.target.value)
        }
      >
        <option value="default">
          Sort
        </option>

        <option value="priceLow">
          Price Low to High
        </option>

        <option value="priceHigh">
          Price High to Low
        </option>

        <option value="nameAZ">
          Name A-Z
        </option>

        <option value="nameZA">
          Name Z-A
        </option>
      </select>

      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default FilterSort;

