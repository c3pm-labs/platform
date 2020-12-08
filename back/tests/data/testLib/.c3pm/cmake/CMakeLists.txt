cmake_minimum_required(VERSION 3.16)
project(testLib VERSION 1.0.0)

set(CMAKE_CXX_STANDARD 20)

add_executable(testLib)

target_sources(testLib PRIVATE  /Users/clementdubois/Documents/Tech/c3pm/project/platform/back/tests/data/testLib/src/main.cpp )


target_include_directories(
	testLib PRIVATE 
	
)

target_link_libraries(
	testLib
	PUBLIC
	
)
