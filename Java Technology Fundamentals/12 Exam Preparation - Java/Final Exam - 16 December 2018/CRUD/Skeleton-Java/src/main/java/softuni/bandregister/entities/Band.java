package softuni.bandregister.entities;

import javax.persistence.*;

@Entity
@Table(name = "bands")
public class Band {
    private Integer id;
    private String name;
    private String members;
    private Double honorarium;
    private String genre;

    public Band() {
    }

    public Band(String name, String members, Double honorarium, String genre) {
        this.name = name;
        this.members = members;
        this.honorarium = honorarium;
        this.genre = genre;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    @Column(nullable = false)
    public String getName() {
        return name;
    }

    @Column(nullable = false)
    public String getMembers() {
        return members;
    }

    @Column(nullable = false)
    public Double getHonorarium() {
        return honorarium;
    }

    @Column(nullable = false)
    public String getGenre() {
        return genre;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMembers(String members) {
        this.members = members;
    }

    public void setHonorarium(Double honorarium) {
        this.honorarium = honorarium;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
}