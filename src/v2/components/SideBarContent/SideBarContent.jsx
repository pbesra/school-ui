import Button  from "@mui/material/Button";
import Box  from "@mui/material/Box";

const SideBarContent = ({ sideBarItems, onClickSideBarItem }) => {

    return (
        <>
            <Box sx={{ width: '100%' }}>
                {
                    sideBarItems.map(({ name, label, onClick, style, isVisible }, index) => {
                        if (isVisible) {
                            return (
                                <Button
                                    className="box"
                                    sx={{
                                        ...style,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderBottom: '1px solid #E7E7E7',
                                        cursor: 'pointer',
                                        borderRadius: 0,
                                        textTransform:'none'

                                    }}
                                    key={`b${index}`}
                                    onClick={() => onClickSideBarItem(name)}

                                >
                                    {label}
                                    
                                </Button>
                            );
                        }
                    }

                    )
                }
            </Box>
        </>);
}
export default SideBarContent;