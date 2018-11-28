
const Footer = () => (
  <div>
    <ul>
      <li>
        <a href="http://www.google.com">Link 1</a>
      </li>
    </ul>
    <style jsx>{`
      @media (min-width: 767px) {
        li {
          list-style: none;
          display: inline-block;
          padding-left: 20px;
        }
      }
      @media (max-width: 768px) {
        li {
          list-style: none;
        }
      }
      ul {
        padding-left: 0;
      }
      ul.nav {
        text-align: center;
      }
    `}</style>
  </div>
)

export default Footer
