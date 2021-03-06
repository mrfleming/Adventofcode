package main

//chore: inital day setup
import (
	"fmt"
	"strings"

	common "../common"
)

// PassengerGroup holds data
type PassengerGroup struct {
	Raw       string
	Size      int
	Responses map[string]int
}

// NewPassengerGroup is the public constructor
func NewPassengerGroup(inputText string) PassengerGroup {
	inputText = strings.TrimSpace(inputText)

	myMap := parseResponses(inputText)

	return PassengerGroup{
		Raw:       inputText,
		Size:      len(strings.Split(inputText, " ")),
		Responses: myMap,
	}
}

// ParseResponses reads the raw input and builds the map
func parseResponses(inputText string) map[string]int {

	inputText = strings.TrimSpace(inputText)
	responses := make(map[string]int)

	for i := 0; i < len(inputText); i++ {

		key := string(inputText[i])
		if key == " " {
			continue
		} else {
			_, exists := responses[key]

			if exists {
				responses[key] = responses[key] + 1
			} else {
				responses[key] = 1
			}
		}
	}

	return responses
}

// TotalQuestionCount returns the total number of unique questions answered a Passenger Group
func (pg *PassengerGroup) TotalQuestionCount() int {
	return len(pg.Responses)
}

// TotalUnaminousQuestionCount returns the number of questions that everyone answered yes
func (pg *PassengerGroup) TotalUnaminousQuestionCount() int {
	total := 0
	for _, answers := range pg.Responses {
		if answers == pg.Size {
			total++
		}
	}

	return total
}

func main() {

	// Read the file
	filename := "day6input.txt"
	text := common.ReadInputText(filename)
	//common.Show(text, "string")

	// loop through lines by group onto one line
	tempLine := ""
	var inputLines []string
	for _, line := range text {
		if line != "" {
			// compiles into one line
			trimmedLine := strings.TrimSuffix(line, "\n")
			tempLine = tempLine + trimmedLine + " "
		} else {
			// appends to list and resets
			inputLines = append(inputLines, tempLine)
			tempLine = ""
		}
	}
	// save the last one when it hits the end of file
	inputLines = append(inputLines, tempLine)

	//common.Show(inputLines, "string")
	//fmt.Printf("# of lines = %d\n", len(inputLines))
	var groups []PassengerGroup
	for _, line := range inputLines {
		g := NewPassengerGroup(line)
		groups = append(groups, g)
	}
	//fmt.Printf("# of groups = %d\n", len(groups))
	//fmt.Printf("%v", groups[len(groups)-1])

	fmt.Println("-*-*-*-*--*-*-*-*-*--*-*-*-*-*--*-*-*-*-")
	fmt.Println("-*-*-*-*-*- MERRY CHRISTMAS! -*-*-*-*-*-")
	fmt.Println("-*-*-*-*--*-*-*-*-*--*-*-*-*-*--*-*-*-*-")
	part1(groups)
	part2(groups)

}

func part1(groups []PassengerGroup) {
	fmt.Println("\n-*-*-*-*-*- Part 1! -*-*-*-*-*-")
	count := 0
	for _, group := range groups {
		count += group.TotalQuestionCount()
	}
	fmt.Printf("The total # of Q's where ANYONE in a group answered YES = %d\n", count)
}

func part2(groups []PassengerGroup) {
	fmt.Println("\n-*-*-*-*-*- Part 2! -*-*-*-*-*-")
	count := 0
	for _, group := range groups {
		count += group.TotalUnaminousQuestionCount()
	}

	fmt.Printf("The total # of Q's where EVERYONE in a group answered YES = %d\n", count)

}
