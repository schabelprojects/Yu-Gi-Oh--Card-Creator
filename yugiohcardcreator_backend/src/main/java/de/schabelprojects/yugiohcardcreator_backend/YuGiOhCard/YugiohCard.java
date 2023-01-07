package de.schabelprojects.yugiohcardcreator_backend.YuGiOhCard;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "cards")
@NoArgsConstructor
@Data
public class YugiohCard {

    @Id
    private String id;
    private String name;
    private String attribute;
    private String type;
    private String race;
    private String description;
    private int attack;
    private int defence;
    private int normallevel;
    private int xyzlevel;
    private String image;
    private String cardtype;

    
}
