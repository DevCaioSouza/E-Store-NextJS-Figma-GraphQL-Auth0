import styled from 'styled-components'

const StyledTopBar = styled.div`
  background-color: #004695;
`

const TopBar = () => {
  return (
    <StyledTopBar>
      <div className='sectionTitle'>
        <div className='menuTitle'>
          <h3>TopBar Title</h3>
        </div>
      </div>
    </StyledTopBar>
  )
};

export default TopBar;