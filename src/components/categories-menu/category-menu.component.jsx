import './category-menu.styles.scss'
import CategoryItem from '../categories-item/category-item.component'

const CategoryMenu = ({categories}) => (
    <div className="categories-container">
        {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
        ))}
  </div>
    )

export default CategoryMenu